import React, { useState } from "react";
import "./AddProductForm.css"; // Include your CSS file for styling

const AddProduct = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
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
                  name="productType"
                  value={product.productType}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Name:</td>
              <td>
                <input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Price:</td>
              <td>
                <input
                  type="text"
                  name="productPrice"
                  value={product.productPrice}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Image:</td>
              <td>
                <input
                  type="text"
                  name="productImage"
                  value={product.productImage}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Manufacturer:</td>
              <td>
                <input
                  type="text"
                  name="productManufacturer"
                  value={product.productManufacturer}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Condition:</td>
              <td>
                <input
                  type="text"
                  name="productCondition"
                  value={product.productCondition}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Product Discount:</td>
              <td>
                <input
                  type="text"
                  name="productDiscount"
                  value={product.productDiscount}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Inventory:</td>
              <td>
                <input
                  type="text"
                  name="inventory"
                  value={product.inventory}
                  onChange={handleChange}
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
