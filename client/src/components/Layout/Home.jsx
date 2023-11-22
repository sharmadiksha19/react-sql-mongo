import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:5001/bestseller")
      .then((response) => {
        setProducts(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching bestseller", error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to SmartHomes</h1>
      <h2>Our Best Sellers</h2>
      {/* Product Cards */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`/images/Bestseller//${product.productImage}`}
              alt={product.productName}
            />
            <h3>{product.productName}</h3>
            <p>{product.productDiscount}</p>
            <p>Price: ${product.productPrice}</p>
            <button className="add-to-cart">Add to Cart</button>
            <button className="view-reviews">View Reviews</button>
            <button className="write-review">Write a Review</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
