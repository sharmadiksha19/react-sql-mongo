// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/dashboard");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="logo">Smart Homes</div>
          <div className="products">
            <div className="doorBells">Door Bells</div>
            <div className="doorLocks">Door Locks</div>
            <div className="lights">Lights</div>
            <div className="speakers">Speakers</div>
            <div className="thermostats">Thermostats</div>
          </div>
          <div className="trending">Trending</div>
        </div>
        <div className="header-right">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="userlogin" onClick={handleLoginClick}>
            Login
          </div>
          <div className="vieworder">View Order</div>
          <div className="cart">
            <FaCartPlus />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
