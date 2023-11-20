import React from "react";

const DeleteProductComponent = ({ productId }) => {
  const handleDelete = async () => {
    // Send a DELETE request to delete the product
    try {
      const response = await fetch(
        `http://localhost:3002/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return;
};
