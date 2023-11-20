import React from "react";

const DeleteOrderComponent = ({ orderId }) => {
  const handleDelete = async () => {
    // Send a DELETE request to delete the order
    try {
      const response = await fetch(`http://localhost:3002/orders/${orderId}`, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div>
      <h2>Delete Order</h2>
      <button onClick={handleDelete}>Delete Order</button>
    </div>
  );
};

export default DeleteOrderComponent;
