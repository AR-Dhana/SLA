import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/sample/get-prod');
      setProducts(res.data.products || []);
    } catch (err) {
      setMessage("Failed to fetch products. Server not reachable.");
    }
  };

  return (
    <div>
      <div className="bg-success bg-opacity-50 d-flex justify-content-between p-3">
        <div>
          <img src="/snail.png" alt="logo" />
        </div>
      </div>

      <div className="container my-5">
        <h4 className="text-center mb-4">Available Products</h4>

        {message && <div className="alert alert-info text-center">{message}</div>}

        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4 shadow-sm">
                  <img
                    src={product.product_image || '/default-product.png'}
                    className="card-img-top"
                    alt={product.product_name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">{product.product_description}</p>
                    <p className="text-muted">Weight: {product.product_weight} kg</p>
                    <p className="text-danger">
                      Price: ${product.product_discount_price || product.product_price}
                    </p>
                    <p className="text-success">Available Quantity: {product.available_quantity}</p>
                    {product.status === 'active' ? (
                      <button className="btn btn-primary w-100">Add to Cart</button>
                    ) : (
                      <button className="btn btn-secondary w-100" disabled>
                        Out of Stock
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
