import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchOrderStatus();
  }, []);

  const fetchOrderStatus = async () => {
    try {
      const res = await axios.get('http://localhost:5000/sample/order-status');
      setOrders(res.data.orders || []);
    } catch (err) {
      setMessage("Failed to fetch order status. Server not reachable.");
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
        <h4 className="text-center mb-4">Your Orders</h4>

        {message && <div className="alert alert-info">{message}</div>}

        {orders.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer ID</th>
                  <th>Status</th>
                  <th>Updated At</th>
                  <th>Updated By</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.status_id}>
                    <td>{index + 1}</td>
                    <td>{order.order_id}</td>
                    <td>{order.customer_id}</td>
                    <td>{order.status.replaceAll('_', ' ')}</td>
                    <td>{new Date(order.status_updated_time).toLocaleString()}</td>
                    <td>{order.updated_by}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
