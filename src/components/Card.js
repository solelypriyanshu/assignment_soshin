import React from 'react';
import './Card.css';

const Card = ({ title, value, description }) => {
  return (
    <div className="card-custom">
      <h5>{title}</h5>
      <h2>{value}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
