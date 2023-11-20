import React, { useState, useEffect } from "react";

const ReadProductComponent = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/products/${productId}`
        );
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error reading product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h2>Read Product</h2>
      {product ? (
        <div>
          <p>Product Type: {product.productType}</p>
          <p>Product Name: {product.productName}</p>
          <p>Product Price: {product.productPrice}</p>
          {/* Display other product details */}
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
};

export default ReadProductComponent;
