// ShoppingCart.jsx
import React from "react";

const ShoppingCart = ({ cartItems, removeFromCart, total }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <div>{`$${item.price}`}</div>
          </li>
        ))}
      </ul>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

export default ShoppingCart;
