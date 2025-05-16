const db = require('../config/db');
const bcrypt = require('bcryptjs');

const getProd = (req, res) => {
    db.query('CALL GetProducts()', (err, results) => {
        if (err) {
            console.error('Error executing stored procedure: ', err);
            return res.status(500).json({ message: 'Error fetching products' });
        }
        res.json({ products: results[0] }); // results[0] contains the result of the SELECT query
    });
}

const adminLogin = (req, res) => {
    const { admin_created_id, admin_created_password } = req.body;

    if (!admin_created_id || !admin_created_password) {
        return res.status(400).json({ message: "Please provide Admin ID and Password." });
    }

    const query = `CALL ValidateAndLoginAdmin(?, ?)`;

    db.query(query, [admin_created_id, admin_created_password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        const message = result[0][0]?.message;

        if (message === 'Login Successful') {
            res.status(200).json({ message: "Login Successful" });
        } else {
            res.status(401).json({ message });
        }
    });
};

const customerSignUp = (req, res) => {
    const {
        customer_name,
        customer_phone_number,
        customer_email,
        customer_password,
        customer_gender,
        customer_door_number,
        customer_street_name,
        customer_near_landmark,
        customer_city,
        customer_pin_code,
        customer_state
    } = req.body;

    const query = `CALL InsertCustomer(?,?,?,?,?,?,?,?,?,?,?)`;

    db.query(
        query,
        [
            customer_name,
            customer_phone_number,
            customer_email,
            customer_password,
            customer_gender,
            customer_door_number,
            customer_street_name,
            customer_near_landmark,
            customer_city,
            customer_pin_code,
            customer_state
        ],
        (err, results) => {
            if (err) {
                console.error('Failed to signup customer:', err);
                return res.status(500).json({ message: 'Signup failed. Please try again.' });
            }
            res.json({ message: 'Signup Successful' });
        }
    );
}

module.exports = { getProd, adminLogin, customerSignUp };