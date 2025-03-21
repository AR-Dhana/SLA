import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CustomerIndex = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='ad-cus-log bg-dark'>
        <div className='ad-cus-log-header'>
          <h1 className='welcome-text color-primary'>Welcome To Our Farm...</h1>
        </div>

        <div className='ad-cus-log-body'>
          <div className='aa'>
            <button className='ad-login-button' onClick={() => navigate("/admin")}>Login</button>
          </div>
          <div className="aa">
            <button className='cus-login-button' onClick={() => navigate("/customer")}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}
