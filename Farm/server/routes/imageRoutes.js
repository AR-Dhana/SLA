const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const upload = require('../config/multer');
const db = require('../config/db');

// Upload image
router.post('/upload', upload.single('image'), (req, res) => {
  console.log("File received:", req.file); 
  const imagePath = req.file.path.replace(/\\/g, '/');
  console.log("Image path:", imagePath);
  const sql = 'INSERT INTO images (path) VALUES (?)';
  // const sql = `INSERT INTO images (path) VALUES ('uploads/1744577865764.jpg')`;
  db.query(sql, [imagePath], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ path: imagePath });
  });
});

// Get images
router.get('/all', (req, res) => {
  db.query('SELECT * FROM images', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

module.exports = router;
