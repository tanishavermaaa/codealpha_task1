const express = require('express');
const Order = require('../models/order');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Session at POST /orders:', req.session);

  if (!req.session.user) return res.status(401).send('Login required');
  if (!req.session.cart || req.session.cart.length === 0) return res.status(400).send('Your cart is empty.');

  try {
    const order = new Order({
      user: req.session.user._id,
      products: req.session.cart,
    });
    await order.save();

    req.session.cart = []; // clear the cart after order
    res.status(201).render('orderConfirmation');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to place order');
  }
});

router.get('/', async (req, res) => {
  console.log('Session at GET /orders:', req.session);

  if (!req.session.user) return res.status(401).send('Login required');

  try {
    const orders = await Order.find({ user: req.session.user._id }).populate('products.productId');

    if (!orders || orders.length === 0) {
      return res.status(404).send('No orders found');
    }

    res.render('orders', { orders });
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch orders');
  }
});

module.exports = router;
