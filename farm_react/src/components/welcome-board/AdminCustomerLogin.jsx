import React from 'react';
import './AdminCustomerLogin.css';
import '../../bootstrap.css';
import { useNavigate } from 'react-router-dom';

export const AdminCustomerLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='ad-cus-log bg-dark'>
        <div className='ad-cus-log-header'>
          <h1 className='welcome-text color-primary'>Welcome To Our Farm...</h1>
        </div>

        <div className='ad-cus-log-body'>
          <div className='aa'>
            <button className='ad-login-button' onClick={() => navigate("/admin")}>Admin</button>
          </div>
          <div className="aa">
            <button className='cus-login-button' onClick={() => navigate("/customer")}>Customer</button>
          </div>
        </div>
      </div>
    </>
  )
}
