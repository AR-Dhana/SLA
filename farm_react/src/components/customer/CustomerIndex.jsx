import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../bootstrap.css';

export const CustomerIndex = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='ad-cus-log'>
        <div className='ad-cus-log-header'>
          <h2 className='welcome-text'>Welcome To Our <br /> Farm...</h2>
        </div>

        <div className='ad-cus-log-body'>
          <div className='aa'>
            <button className='ad-login-button btn btn-primary w-50 fs-3' onClick={() => navigate("/login")}>Login</button>
          </div>
          <br />
          <br />
          <div className="aa">
            <button className='cus-login-button btn btn-primary w-50 fs-3' onClick={() => navigate("/sign-up")}>Sign Up</button>
          </div>
          <p className="text-center mt-3">
            <Link to="/" className="text-decoration-none">
              <span className="fs-3">&#8617;</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
