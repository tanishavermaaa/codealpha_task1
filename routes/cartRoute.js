const express = require('express');
const Product = require('../models/product');
const router = express.Router();
const { ensureAuth } = require('../middleware/authMiddleware');

// Add product to cart
router.post('/add/:productId', async (req, res) => {
  if (!req.session.user) return res.status(401).send('Login required');

  const product = await Product.findById(req.params.productId);
  if (!product) return res.status(404).send('Product not found');

  if (!req.session.cart) req.session.cart = [];

  // Check if product already in cart
  const existing = req.session.cart.find(item => item.productId === req.params.productId);
  if (existing) {
    existing.quantity++;
  } else {
    req.session.cart.push({ productId: req.params.productId, quantity: 1 });
  }
  res.status(200).send('Product added to cart');
});

// View cart
router.get('/', async (req, res) => {
  if (!req.session.user) return res.status(401).send('Login required');
  if (!req.session.cart || req.session.cart.length === 0) return res.send('Your cart is empty.');

  // Populate product details for each cart item
  const cartDetails = [];
  for (let item of req.session.cart) {
    const product = await Product.findById(item.productId);
    if (product) {
      cartDetails.push({
        product,
        quantity: item.quantity
      });
    }
  }

  res.render('cart', { cart: cartDetails });
});

// Remove product from cart
router.post('/remove/:productId', (req, res) => {
  if (!req.session.user) return res.status(401).send('Login required');
  if (!req.session.cart) return res.status(400).send('Cart is empty');

  req.session.cart = req.session.cart.filter(item => item.productId !== req.params.productId);
  res.status(200).send('Product removed from cart');
});

module.exports = router;
