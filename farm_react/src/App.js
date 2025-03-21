import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminCustomerLogin } from './components/welcome-board/AdminCustomerLogin';
import { AdminLogin } from './components/admin/AdminLogin';
import { CustomerIndex } from './components/customer/CustomerIndex';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminCustomerLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/customer" element={<CustomerIndex />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
