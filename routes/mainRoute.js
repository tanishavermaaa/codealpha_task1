const express = require('express');
const router = express.Router();

const authRoute = require('./authRoute');
const productRoute = require('./productRoute');
const orderRoute = require('./orderRoute');
const cartRoute = require('./cartRoute');

router.use('/auth', authRoute);
router.use('/products', productRoute);
router.use('/orders', orderRoute);
router.use('/cart', cartRoute);

router.get('/', (req, res) => {
  res.redirect('/products');
});

module.exports = router;
