// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, formData);
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response.data.message || 'Something went wrong');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ backgroundColor: "white", padding:"2rem"}}>
                <h2>Sign Up</h2>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
                <p>{message}</p>
            </form>
        </>
    );
};

export default SignupForm;
