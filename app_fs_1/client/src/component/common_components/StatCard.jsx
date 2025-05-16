import React from 'react';

const StatCard = ({ label, count }) => {
  return (
    <div className="bg-light p-3 text-center rounded shadow-sm mx-3 w-75">
      <div>{label}</div>
      <h5 className="text-primary">{count}</h5>
    </div>
  );
};

export default StatCard;
