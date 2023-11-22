import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cartState, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    // add other form fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = () => {
    // Implement your logic to place the order
    console.log("Order placed:", formData);
    clearCart(); // Clear the cart after placing the order
    navigate("/vieworder"); // Navigate to the order confirmation page
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other form fields as needed */}
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
