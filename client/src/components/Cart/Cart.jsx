import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartState, removeFromCart } = useCart();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartState.cartItems) {
      const discountedPrice = item.price - (item.price * item.discount) / 100;
      totalPrice += discountedPrice;
    }
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;
