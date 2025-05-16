// import React from 'react'

// function Customer_login() {
//   return (
//     <div>Customer_login</div>
//   )
// }

// export default Customer_login




import React, { useState } from 'react';
import axios from 'axios';

const CustomerSignup = () => {
  const [form, setForm] = useState({
    customer_name: '',
    customer_phone_number: '',
    customer_email: '',
    customer_password: '',
    customer_gender: '',
    customer_door_number: '',
    customer_street_name: '',
    customer_near_landmark: '',
    customer_city: '',
    customer_pin_code: '',
    customer_state: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/sample/customer-signup', form);
      setMessage(res.data.message || "Signup successful!");
      setForm({
        customer_name: '',
        customer_phone_number: '',
        customer_email: '',
        customer_password: '',
        customer_gender: '',
        customer_door_number: '',
        customer_street_name: '',
        customer_near_landmark: '',
        customer_city: '',
        customer_pin_code: '',
        customer_state: ''
      })
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4 text-center">Customer Signup</h3>

      {[
        { label: 'Name', name: 'customer_name' },
        { label: 'Phone Number', name: 'customer_phone_number', type: 'tel' },
        { label: 'Email', name: 'customer_email', type: 'email' },
        { label: 'Password', name: 'customer_password', type: 'password' },
        { label: 'Door Number', name: 'customer_door_number' },
        { label: 'Street Name', name: 'customer_street_name' },
        { label: 'Near Landmark', name: 'customer_near_landmark' },
        { label: 'City', name: 'customer_city' },
        { label: 'Pin Code', name: 'customer_pin_code' },
        { label: 'State', name: 'customer_state' }
      ].map((field, idx) => (
        <div className="mb-3" key={idx}>
          <label className="form-label">{field.label}</label>
          <input
            type={field.type || 'text'}
            className="form-control"
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          className="form-select"
          name="customer_gender"
          value={form.customer_gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button className="btn btn-primary w-100" onClick={handleSubmit}>Sign Up</button>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default CustomerSignup;
