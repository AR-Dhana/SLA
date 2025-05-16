import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PaymentStatus = () => {
  const [payments, setPayments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/sample/payment-status');
      setPayments(res.data.payments || []);
    } catch (err) {
      setMessage("Failed to fetch payment details. Server not reachable.");
    }
  };

  return (
    <div>
      <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
        <div>
          <img src="/snail.png" alt="logo" />
        </div>
        <div>
          <Link to="/customer-dashboard">
            <button className="btn btn-primary">Back to Dashboard</button>
          </Link>
        </div>
      </div>

      <div className="container my-5">
        <h4 className="text-center mb-4">Your Payment History</h4>

        {message && <div className="alert alert-info">{message}</div>}

        {payments.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer ID</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Gateway TXN ID</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment.payment_id}>
                    <td>{index + 1}</td>
                    <td>{payment.order_id}</td>
                    <td>{payment.customer_id}</td>
                    <td>{payment.payment_method.replaceAll('_', ' ')}</td>
                    <td>
                      {payment.payment_status === 'success' ? (
                        <span className="text-success">{payment.payment_status}</span>
                      ) : payment.payment_status === 'pending' ? (
                        <span className="text-warning">{payment.payment_status}</span>
                      ) : (
                        <span className="text-danger">{payment.payment_status}</span>
                      )}
                    </td>
                    <td>{payment.payment_gateway_txn_id || 'N/A'}</td>
                    <td>{new Date(payment.payment_date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">No payment records found.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
