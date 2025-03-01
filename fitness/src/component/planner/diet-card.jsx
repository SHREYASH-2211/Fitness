import React, { useState } from "react";
import "./diet-planner.css";
import "./diet-card.css"; // Import shared styles if needed

const DietCard = ({ food, onSubmit }) => {
  const [localQuantity, setLocalQuantity] = useState(0);

  const increment = () => setLocalQuantity(localQuantity + 1);
  const decrement = () => {
    if (localQuantity > 0) setLocalQuantity(localQuantity - 1);
  };

  const handleSubmit = () => {
    if (localQuantity > 0) {
      onSubmit(food, localQuantity);
      setLocalQuantity(0);
    }
  };

  return (
    <div className="diet-card">
      <img src={food.image} alt={food.title} className="diet-card-img" />
      <h4>{food.title}</h4>
      <p>{food.calories} cal</p>
      <div className="quantity-controls">
        <button onClick={decrement} className="quantity-btn">–</button>
        <span className="quantity-value">{localQuantity}</span>
        <button onClick={increment} className="quantity-btn">+</button>
      </div>
      {localQuantity > 0 && (
        <button onClick={handleSubmit} className="submit-btn">Submit</button>
      )}
    </div>
  );
};

export default DietCard;