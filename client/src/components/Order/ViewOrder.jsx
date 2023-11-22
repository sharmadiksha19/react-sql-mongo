import React from "react";

const ViewOrder = ({ location }) => {
  const orderDetails = location.state;

  return (
    <div className="view-order-container">
      <h2>Order Confirmation</h2>
      <p>Order Number: {orderDetails.orderNumber}</p>
      <p>Confirmation Number: {orderDetails.confirmationNumber}</p>
      <p>Pickup Date: {orderDetails.pickupDate}</p>
      <p>Name: {orderDetails.name}</p>
      {/* Display other order details */}
    </div>
  );
};

export default ViewOrder;
