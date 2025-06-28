const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');

dotenv.config(); 

const app = express(); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: false
}));

const mainRoutes = require('./routes/mainRoute');
app.use('/',mainRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(3000, () => console.log('✅ Server running on http://localhost:3000')))
  .catch(err => console.log('❌ MongoDB connection error:', err));
