import React, { useState } from "react";
import axios from "axios";
import "./AddProductForm.css";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    ProductType: "",
    Id: "",
    productName: "",
    productPrice: "",
    productImage: "",
    productManufacturer: "",
    productCondition: "",
    productDiscount: "",
    inventory: "",
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
    console.log(productDetails);
    try {
      const response = await axios.post(
        "http://localhost:5001/products",
        productDetails
      );
      console.log(response.data); // Assuming the API returns a message upon successful creation
      // You can redirect the user to another page or show a success message here
      console.log("Product added:", productDetails);
      // Show alert on successful
      window.alert("Product Added Successfully!");
    } catch (error) {
      console.error("Error creating product:", error.message);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Product Type:</td>
              <td>
                <input
                  type="text"
                  name="ProductType"
                  value={productDetails.ProductType}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
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
            <tr>
              <td>Product Name:</td>
              <td>
                <input
                  type="text"
                  name="productName"
                  value={productDetails.productName}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Price:</td>
              <td>
                <input
                  type="text"
                  name="productPrice"
                  value={productDetails.productPrice}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Image:</td>
              <td>
                <input
                  type="text"
                  name="productImage"
                  value={productDetails.productImage}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Manufacturer:</td>
              <td>
                <input
                  type="text"
                  name="productManufacturer"
                  value={productDetails.productManufacturer}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Condition:</td>
              <td>
                <input
                  type="text"
                  name="productCondition"
                  value={productDetails.productCondition}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Discount:</td>
              <td>
                <input
                  type="text"
                  name="productDiscount"
                  value={productDetails.productDiscount}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Inventory:</td>
              <td>
                <input
                  type="text"
                  name="inventory"
                  value={productDetails.inventory}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
