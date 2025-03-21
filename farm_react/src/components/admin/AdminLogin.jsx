import React from "react";
import "../../bootstrap.css";

export const AdminLogin = () => {
  return (
    <div className="bg-dark">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ width: "28rem", borderRadius: "1rem" }}>
          <h3 className="text-center mb-5">Welcome Admin</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">User Id</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your user id" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="text-center mt-4">
            <a href="#" className="text-decoration-none">Forgot Password?</a><br />
            <a href="#" className="text-decoration-none">Go Back</a><br />
            {/* Don't have an account?  
            <a href="#" className="text-decoration-none">Register here</a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
