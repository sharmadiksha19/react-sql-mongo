import React, { useState, useEffect } from "react";
import Axios from "axios";

const Bestseller = ({ productId }) => {
  const [bestseller, setBestseller] = useState(null);

  useEffect(() => {
    // Fetch bestseller product by productId
    Axios.get("http://localhost:3002/bestsellers/:Id")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBestseller(data))
      .catch((error) => {
        console.log("Full response:", error.response.data); // Add this line
      });
  }, [productId]);

  const handleAddToCart = () => {
    console.log("Added to cart:", bestseller);
  };

  if (!bestseller) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bestseller-card">
      <img src={bestseller.productImage} alt={bestseller.productName} />
      <h3>{bestseller.productName}</h3>
      <p>Price: ${bestseller.productPrice}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Bestseller;
