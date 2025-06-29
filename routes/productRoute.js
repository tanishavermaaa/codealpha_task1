const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('product', { products, query: req.query }); 
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Failed to fetch products');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');

    res.render('productDetails', { product }); 
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).send('Failed to fetch product');
  }
});

router.post('/add', async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const product = new Product({ name, description, price, image, category });
    await product.save();
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ message: 'Failed to add product', error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, category },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product updated', product });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
});

module.exports = router;
