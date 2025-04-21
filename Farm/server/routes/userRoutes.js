// import express from 'express';
// const router = express.Router();
// const { ima } = require('./imageRoutes');

// router.post('/upload', );
// router.get('/users', getUsers);

// export default router;



const express = require('express');
const router = express.Router();
const multer = require('../config/multer');
const db = require('../config/db');
const path = require('path');

router.post('/admin/add-product', multer.single('product_image'), (req, res) => {
  const {
    bried_id,
    product_name,
    product_category,
    product_description,
    product_weight,
    product_price,
    product_discount_price,
    available_quantity
  } = req.body;

  const product_image = req.file ? req.file.filename : null;

  const query = `INSERT INTO products_table 
    (bried_id, product_name, product_category, product_description, product_weight, product_price, product_discount_price, product_image, available_quantity) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    bried_id,
    product_name,
    product_category,
    product_description,
    product_weight,
    product_price,
    product_discount_price,
    product_image,
    available_quantity
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting product:', err);
      return res.status(500).json({ message: 'Failed to add product', error: err });
    }
    res.status(200).json({ message: 'Product added successfully', result });
  });
});

module.exports = router;
