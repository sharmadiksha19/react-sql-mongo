import React, { useState } from "react";
import axios from "axios";
import "./DeleteProduct.css";

const DeleteProduct = () => {
  const [productDetails, setProductDetails] = useState({
    Id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:5001/products/:id`,
        productDetails
      );
      console.log(response.data);
      console.log("Product Deleted", productDetails);
      // Show alert on successful
      window.alert("Product Deleted Successfully!");
    } catch (error) {
      console.error("Error Deleting product:", error.message);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div className="product-form-container">
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Product ID:</td>
              <td>
                <input
                  type="text"
                  name="Id"
                  value={productDetails.Id}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
};

export default DeleteProduct;
