import React from "react";
import "../../../bootstrap.css";
import { Link } from "react-router-dom";

export const AdminLogin = () => {
    return (
        <div className="bg-light">
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
                        <button type="submit" className="btn btn-primary w-100 fs-3">Login</button>
                    </form>
                    <p className="text-center mt-3">
                        <Link to="/upload-img" className="text-decoration-none">upload</Link><br />
                        <Link to="/gallary-img" className="text-decoration-none">gallary</Link><br />
                        <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link><br />
                        <Link to="/" className="text-decoration-none">
                            <span className="fs-3">&#8617;</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
