// ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <div className="product-buttons">
          <button onClick={() => console.log("Add to Cart")}>
            Add to Cart
          </button>
          <button onClick={() => console.log("View Review")}>
            View Review
          </button>
          <button onClick={() => console.log("Write Review")}>
            Write Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
