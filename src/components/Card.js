// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ title, value, description, isHighlighted }) => {
  return (
    <div className={`card ${isHighlighted ? "highlighted" : ""}`}>
      <h5>{title}</h5>
      <p className="value">{value}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
