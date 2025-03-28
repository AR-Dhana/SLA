import React from 'react'
import { Link } from 'react-router-dom';

export const CustomerLogin = () => {
  return (
    <div className="bg-dark">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ width: "28rem", borderRadius: "1rem" }}>
          <h3 className="text-center mb-5">Welcome Customer</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="userId" className="form-label">User Id</label>
              <input type="text" className="form-control" id="userId" placeholder="Enter your user id" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100 fs-3">Login</button>
          </form>
          <p className="text-center mt-3">
            <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link><br />
            Don't have an account?
            <Link to="/sign-up" className="text-decoration-none"> Register here.</Link><br />
            <Link to="/customer" className="text-decoration-none">
              <span className="fs-3">&#8617;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
