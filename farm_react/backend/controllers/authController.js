const db = require('../config/db');
const bcrypt = require('bcryptjs');

const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Hash the password
  bcrypt.hash(password, 8, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Database error' });
      }

      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: result.insertId,
          username: username
        }
      });
    });
  });
};



// Fetch all users
const getUsers = (req, res) => {
  const sql = 'SELECT id, username FROM users ORDER BY id asc';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database fetch error' });
    res.status(200).json(results);
  });
};

module.exports = { registerUser, getUsers };
