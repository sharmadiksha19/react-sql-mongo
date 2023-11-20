import React, { useState } from "react";

const UpdateProductComponent = ({ productId }) => {
  const [productData, setProductData] = useState({
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Send a PUT request to update the product
    try {
      const response = await fetch(
        `http://localhost:3002/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleUpdate}>
        {/* Your input fields for updating product data */}
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={productData.productName}
          onChange={handleInputChange}
        />
        {/* Other input fields */}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductComponent;
