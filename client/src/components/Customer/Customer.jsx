import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";

const Customer = () => {
  const handlecartclick = () => {
    navigate("/cart");
  };
  const { cartState } = useCart();
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/login">Account</Link>
          </li>
          <li>
            <Link to="/register">View Orders</Link>
          </li>
          <li>
            <div className="cart">
              <FaCartPlus onClick={handlecartclick} />
              <span className="cart-count">{cartState.cartCount}</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Customer;
