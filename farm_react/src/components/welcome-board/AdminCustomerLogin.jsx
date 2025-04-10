import React from 'react';
import './AdminCustomerLogin.css';
import '../../bootstrap.css';
import { useNavigate } from 'react-router-dom';

export const AdminCustomerLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => { navigate("/demo") }}>Demo</button>
      <button onClick={() => { navigate("/fs") }}>FS</button>
      <div className='ad-cus-log'>
        <div className='ad-cus-log-header'>
          <h2 className='welcome-text'>Welcome To Our <br /> Farm...</h2>
        </div>

        <div className='ad-cus-log-body'>
          <div className='aa'>
            <button className='ad-login-button btn btn-primary w-50 fs-3' onClick={() => navigate("/admin")}>Admin</button>
          </div>
          <br />
          <br />
          <br />
          <div className="aa">
            <button className='cus-login-button btn btn-primary w-50 fs-3' onClick={() => navigate("/customer")}>Customer</button>
          </div>
        </div>
      </div>
    </>
  )
}
