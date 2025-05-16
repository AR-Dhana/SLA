import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomerCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/sample/customer-cart');
      setCartItems(res.data.cartItems || []);
    } catch (err) {
      setMessage("Failed to fetch cart items. Server not reachable.");
    }
  };

  const removeFromCart = async (cartId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/sample/remove-cart-item/${cartId}`);
      setMessage(res.data.message);
      fetchCartItems(); // Refresh list
    } catch (err) {
      setMessage("Error removing item.");
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
        <h4 className="text-center mb-4">Your Cart</h4>

        {message && <div className="alert alert-info">{message}</div>}

        {cartItems.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Favorite</th>
                  <th>In Cart</th>
                  <th>Added At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.cart_id}>
                    <td>{index + 1}</td>
                    <td>{item.product_id}</td>
                    <td>{item.quantity}</td>
                    <td>{item.is_favorite ? "Yes" : "No"}</td>
                    <td>{item.is_in_cart ? "Yes" : "No"}</td>
                    <td>{new Date(item.added_timestamp).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.cart_id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerCart;
