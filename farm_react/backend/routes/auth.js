const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../controllers/authController');

router.post('/register', registerUser);
router.get('/users', getUsers);

module.exports = router;
