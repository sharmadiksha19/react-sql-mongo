import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import { useCart } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState("bell");
  const navigate = useNavigate();

  useEffect(() => {
    // Make a GET request to your backend endpoint
    axios
      .get("http://localhost:5001/products")
      .then((response) => {
        setProducts(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {
    // Implement your logic for adding the product to the cart
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const writeReview = () => {
    navigate("/write-review");
  };

  const viewReview = () => {
    navigate("/view-review");
  };

  const getImageSource = (product) => {
    // Use conditional logic to determine the image source based on the selected product type
    if (selectedProductType === "bell") {
      return `../images/DoorBells/${product.productImage}`;
    } else if (selectedProductType === "lock") {
      return `../images/DoorLocks/${product.productImage}`;
    } else if (selectedProductType === "light") {
      return `../images/Lights/${product.productImage}`;
    } else if (selectedProductType === "speaker") {
      return `../images/Speakers/${product.productImage}`;
    } else if (selectedProductType === "thermostat") {
      return `../images/Thermostats/${product.productImage}`;
    }
    // Default to a placeholder image if no match is found
    return "../images/placeholder.jpg";
  };

  const filterProductsByType = () => {
    let filteredProducts = [];
    if (selectedProductType === "bell") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(
        (product) => product.productType === selectedProductType
      );
    }

    // Shuffle the array and select the first five elements
    const shuffledProducts = shuffleArray(filteredProducts);
    return shuffledProducts.slice(0, 5);
  };

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="product-main-container">
      <div className="header">
        <h1>Product List</h1>
      </div>
      <div className="dropdown-container">
        <label htmlFor="productType">Select Product Type: </label>
        <select
          id="productType"
          onChange={(e) => setSelectedProductType(e.target.value)}
        >
          <option value="bell">Door Bells</option>
          <option value="lock">Door Locks</option>
          <option value="light">Lights</option>
          <option value="speaker">Speakers</option>
          <option value="thermostat">Thermostats</option>
        </select>
      </div>
      <div className="product-container">
        {filterProductsByType().map((product) => (
          <div key={product.Id} className="product-card">
            <img
              src={getImageSource(product)}
              alt={product.productName}
              className="product-image"
            />
            <h2>{product.productName}</h2>
            <p>{`Price: $${product.productPrice}`}</p>
            {product.productDiscount && (
              <p>{`Discount: ${product.productDiscount}% off`}</p>
            )}
            <button className="addToCart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="writeReview" onClick={writeReview}>
              Write Review
            </button>
            <button className="viewReviews" onClick={viewReview}>
              View Reviews
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
