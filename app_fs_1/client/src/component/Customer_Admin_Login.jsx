import React from 'react';
import { Link } from 'react-router-dom';

function Customer_Admin_Login() {
    return (
        <>
            <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
                <div>
                    <img src="/snail.png" alt="logo" />
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="text-center w-100" style={{ maxWidth: '400px' }}>
                    <h4 className="mb-4">Welcome to Farm Management</h4>
                    <div>
                        <Link to="/admin">
                            <button className="btn btn-primary">Admin  Login</button>
                        </Link>
                    </div>
                    <br />
                    <div>
                        <Link to="/customer-login">
                            <button className="btn btn-primary">Customer Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer_Admin_Login;