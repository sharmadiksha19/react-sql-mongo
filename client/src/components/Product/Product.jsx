import React, { useState, useEffect } from "react";
import Axios from "axios";

const Product = ({ product }) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
    // You can perform additional logic here, like updating the server or local storage
  };

  return (
    <div className="product-card">
      <img src={product.productImage} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>${product.productPrice}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
