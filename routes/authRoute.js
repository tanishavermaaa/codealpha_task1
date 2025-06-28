const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
  try {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
      return res.status(400).send('Please fill in all fields');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send('User already exists with this email');
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashed });
    await user.save();

    console.log('User registered:', user);

    res.redirect('/auth/login');
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).send('Registration failed. Please try again later.');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
     if (!email || !password) {
      return res.status(400).send('Please provide email and password');
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Login failed: User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Login failed: Incorrect password');
    }

    req.session.user = user;
    res.redirect('/products'); // 
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Server error during login');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).send('Logout failed');
    }
    res.redirect('/auth/login');
  });
});

module.exports = router;
