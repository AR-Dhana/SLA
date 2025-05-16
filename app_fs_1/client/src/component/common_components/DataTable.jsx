import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = () => {
  return (
    <div>
      <h5 className="mt-4 mb-3">Shopping Table</h5>
      <Table bordered responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>Cus.ID</th>
            <th>Order</th>
            <th>Price</th>
            <th>Status</th>
            <th>Customer Feedback</th>
            <th>Delivery Address</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-light' : 'bg-success bg-opacity-25'}>
              <td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
