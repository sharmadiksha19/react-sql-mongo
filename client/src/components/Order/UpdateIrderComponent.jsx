import React, { useState } from "react";

const UpdateOrderComponent = ({ orderId }) => {
  const [orderData, setOrderData] = useState({
    orderName: "",
    orderPrice: 0,
    userAddress: "",
    creditCardNo: "",
    purchaseDate: "",
    shipDate: "",
    quantity: 0,
    shippingCost: 0,
    discount: 0,
    saleAmount: 0,
  });

  const handleInputChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Send a PUT request to update the order
    try {
      const response = await fetch(`http://localhost:3002/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      console.log(result); // Log the response from the server
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div>
      <h2>Update Order</h2>
      <form onSubmit={handleUpdate}>
        {/* Your input fields for updating order data */}
        <label>Order Name:</label>
        <input
          type="text"
          name="orderName"
          value={orderData.orderName}
          onChange={handleInputChange}
        />
        {/* Other input fields */}
        <button type="submit">Update Order</button>
      </form>
    </div>
  );
};

export default UpdateOrderComponent;
