import React, { useState } from "react";
import "./DeleteProduct.css";

const DeleteProduct = () => {
  const [productId, setProductId] = useState("");

  const handleChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDeleteProduct = () => {
    // Handle the logic for deleting the product (e.g., send a request to the server)
    console.log(`Deleting product with ID: ${productId}`);
    // You may want to reset the form or provide feedback to the user
  };

  return (
    <div className="product-form-container">
      <h2>Delete Product</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Product ID:</td>
              <td>
                <input
                  type="text"
                  name="productId"
                  value={productId}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={handleDeleteProduct}>
          Delete Product
        </button>
      </form>
    </div>
  );
};

export default DeleteProduct;
