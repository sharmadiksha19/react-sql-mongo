import React, { useState } from "react";

const CreateProductComponent = () => {
  const [productData, setProductData] = useState({
    productType: "",
    Id: "",
    productName: "",
    productPrice: 0,
    productImage: "",
    productManufacturer: "",
    productCondition: "",
    productDiscount: 0,
    inventory: 0,
  });

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    // Send a POST request to create the product
    try {
      const response = await fetch("http://localhost:3002/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleCreate}>
        {/* Your input fields for creating a new product */}
        <label>Product Type:</label>
        <input
          type="text"
          name="productType"
          value={productData.productType}
          onChange={handleInputChange}
        />
        {/* Other input fields */}
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductComponent;
