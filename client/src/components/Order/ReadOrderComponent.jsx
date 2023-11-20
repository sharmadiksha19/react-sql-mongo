import React, { useState, useEffect } from "react";

const ReadOrderComponent = ({ orderId }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://localhost:3002/orders/${orderId}`);
        const result = await response.json();
        setOrder(result);
      } catch (error) {
        console.error("Error reading order:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  return (
    <div>
      <h2>Read Order</h2>
      {order ? (
        <div>
          <p>Order ID: {order.orderId}</p>
          <p>User Name: {order.userName}</p>
          <p>Order Name: {order.orderName}</p>
          {/* Display other order details */}
        </div>
      ) : (
        <p>Loading order data...</p>
      )}
    </div>
  );
};

export default ReadOrderComponent;
