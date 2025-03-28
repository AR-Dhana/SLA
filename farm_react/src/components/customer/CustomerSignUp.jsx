import React from 'react';
import { Link } from 'react-router-dom';

export const CustomerSignUp = () => {
  return (
    <div className="bg-dark">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ width: "28rem", borderRadius: "1rem" }}>
          <h3 className="text-center mb-3">Customer Register</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name..." required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email..." required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password..." required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number..." required />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="male" required />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="female" required />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="other" value="other" required />
                  <label className="form-check-label" htmlFor="other">Other</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 fs-3">Register</button>
          </form>
          <p className="text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-decoration-none"> Login here.</Link><br />
            <Link to="/customer" className="text-decoration-none">
              <span className="fs-3">&#8617;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
