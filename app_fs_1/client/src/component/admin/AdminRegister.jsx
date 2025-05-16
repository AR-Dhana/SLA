import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    admin_created_id: '',
    admin_created_password: '',
    admin_name: '',
    admin_phone_number: '',
    admin_email: '',
    admin_aadhar_number: '',
    admin_gender: 'male', // default value
    admin_address: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/sample/admin-register', formData);
      setMessage(res.data.message);

      if (res.data.message === "Registration Successful") {
        window.location.href = '/admin-login'; // Redirect to login after successful register
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
          <Link to="/admin-login">
            <button className="btn btn-primary">Admin Login</button>
          </Link>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="text-center w-100" style={{ maxWidth: '500px' }}>
          <h4 className="mb-4">Admin Registration - Farm Management</h4>

          <input
            type="text"
            className="form-control mb-3"
            name="admin_created_id"
            placeholder="Enter Admin ID"
            value={formData.admin_created_id}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control mb-3"
            name="admin_created_password"
            placeholder="Enter Password"
            value={formData.admin_created_password}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="admin_name"
            placeholder="Enter Full Name"
            value={formData.admin_name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="admin_phone_number"
            placeholder="Enter Phone Number"
            value={formData.admin_phone_number}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control mb-3"
            name="admin_email"
            placeholder="Enter Email Address"
            value={formData.admin_email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="admin_aadhar_number"
            placeholder="Enter Aadhar Number"
            value={formData.admin_aadhar_number}
            onChange={handleChange}
          />

          <select
            className="form-select mb-3"
            name="admin_gender"
            value={formData.admin_gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <textarea
            className="form-control mb-3"
            name="admin_address"
            placeholder="Enter Address"
            rows="3"
            value={formData.admin_address}
            onChange={handleChange}
          ></textarea>

          <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>
            Register
          </button>

          {message && <div className="alert alert-info">{message}</div>}

          <p className="mb-0">Already have an account?</p>
          <Link to="/admin" style={{ color: 'deepskyblue', fontSize: '0.9rem' }}>
            Login here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
