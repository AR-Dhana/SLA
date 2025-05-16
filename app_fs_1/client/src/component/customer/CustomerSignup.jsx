import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
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
    customer_state: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/sample/customer-signup', formData);
      setMessage(res.data.message);

      if (res.data.message === "Signup Successful") {
        window.location.href = '/customer-login'; // after signup, go to customer login
      }
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Server not reachable.");
      }
    }
  };

  return (
    <div>
      <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
        <div>
          <img src="/snail.png" alt="logo" />
        </div>
        <div>
          <Link to="/customer-login">
            <button className="btn btn-primary">Customer Login</button>
          </Link>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="text-center w-100" style={{ maxWidth: '500px' }}>
          <h4 className="mb-4">Customer Signup - Farm Management</h4>

          <input
            type="text"
            className="form-control mb-3"
            name="customer_name"
            placeholder="Enter Full Name"
            value={formData.customer_name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="customer_phone_number"
            placeholder="Enter Phone Number"
            value={formData.customer_phone_number}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control mb-3"
            name="customer_email"
            placeholder="Enter Email Address"
            value={formData.customer_email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control mb-3"
            name="customer_password"
            placeholder="Enter Password"
            value={formData.customer_password}
            onChange={handleChange}
          />

          <select
            className="form-select mb-3"
            name="customer_gender"
            value={formData.customer_gender}
            onChange={handleChange}
          >
            <option value="" disabled>--select gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            className="form-control mb-3"
            name="customer_door_number"
            placeholder="Enter Door Number"
            value={formData.customer_door_number}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="customer_street_name"
            placeholder="Enter Street Name"
            value={formData.customer_street_name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="customer_near_landmark"
            placeholder="Enter Nearby Landmark"
            value={formData.customer_near_landmark}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="customer_city"
            placeholder="Enter City"
            value={formData.customer_city}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="customer_pin_code"
            placeholder="Enter Pin Code"
            value={formData.customer_pin_code}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="customer_state"
            placeholder="Enter State"
            value={formData.customer_state}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100 mb-3" onClick={handleSignup}>
            Signup
          </button>

          {message && <div className="alert alert-info">{message}</div>}

          <p className="mb-0">Already have an account?</p>
          <Link to="/customer-login" style={{ color: 'deepskyblue', fontSize: '0.9rem' }}>
            Login here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
