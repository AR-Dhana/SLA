import React from 'react';
import { Link } from 'react-router-dom';

const SuperAdminLogin = () => {
  return (
    <div className="container text-center mt-5">
      <h3>Super Admin Login</h3>
      <Link to="/" className="btn btn-secondary mt-3">Back to Admin Login</Link>
    </div>
  );
};

export default SuperAdminLogin;
