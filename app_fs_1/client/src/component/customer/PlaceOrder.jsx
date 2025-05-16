import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PlaceOrder = () => {
  const [customerId, setCustomerId] = useState('');
  const [orderItems, setOrderItems] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [doorNo, setDoorNo] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [instructions, setInstructions] = useState('');
  const [message, setMessage] = useState('');

  const handlePlaceOrder = async () => {
    try {
      const res = await axios.post('http://localhost:5000/sample/place-order', {
        customer_id: customerId,
        order_total_amount: totalAmount,
        order_items: JSON.parse(orderItems), // Must be valid JSON
        address_door_no: doorNo,
        address_street: street,
        address_landmark: landmark,
        address_city: city,
        address_pincode: pincode,
        address_state: state,
        delivery_instructions: instructions,
      });

      setMessage(res.data.message || 'Order placed successfully!');
      // Optionally, clear form
      setCustomerId('');
      setOrderItems('');
      setTotalAmount('');
      setDoorNo('');
      setStreet('');
      setLandmark('');
      setCity('');
      setPincode('');
      setState('');
      setInstructions('');
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Server not reachable.");
      }
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

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <div className="w-100" style={{ maxWidth: '500px' }}>
          <h4 className="text-center mb-4">Place Your Order</h4>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder='Order Items (JSON format)'
            value={orderItems}
            onChange={(e) => setOrderItems(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Total Amount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Door Number"
            value={doorNo}
            onChange={(e) => setDoorNo(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <textarea
            className="form-control mb-3"
            placeholder="Delivery Instructions"
            rows="3"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>

          <button className="btn btn-primary w-100 mb-3" onClick={handlePlaceOrder}>
            Place Order
          </button>

          {message && <div className="alert alert-info text-center">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
