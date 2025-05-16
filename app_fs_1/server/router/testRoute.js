const express = require('express');
const { adminLogin, getProd, customerSignUp, } = require('../controller/data');

const router = express.Router();

router.get('/get-prod', getProd);
router.post('/admin-login', adminLogin);
router.post('/customer-signup', customerSignUp);

module.exports = router;