import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import Product from "../Product/Product";
import Axios from "axios";

const Customer = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [product, setProduct] = useState({
    productType: "",
    productName: "",
    productPrice: "",
    productImage: "",
    productManufacturer: "",
    productCondition: "",
    productDiscount: "",
    inventory: "",
  });

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await Axios.get("http://localhost:3002/bestsellers");
        setBestSellers(response.data);
        console.log("Products Fetched!");
      } catch (error) {
        console.error("Error fetching best sellers", error);
      }
    };

    // Call the function to fetch best sellers
    fetchBestSellers();
  }, []);

  return (
    <div className="register-container">
      <h2>Best Sellers</h2>
      <div className="product-container">
        {bestSellers.map((product) => (
          <ProductCard key={product.Id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Customer;
