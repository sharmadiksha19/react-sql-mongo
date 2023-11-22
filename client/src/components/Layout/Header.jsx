// Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useUser } from "../User/UserContext";

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleProductClick = () => {
    navigate("/products");
  };

  const handleTrendingClick = () => {
    navigate("/trending");
  };

  const handlehomeclick = () => {
    navigate("/");
  };
  const handleLogoutClick = () => {
    navigate("/logout");
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="logo">Smart Homes</div>
          <div className="products-list" onClick={handleProductClick}>
            <Link to="/products">PRODUCTS</Link>
          </div>
          <div className="trending" onClick={handleTrendingClick}>
            <Link to="/trending">TRENDING</Link>
          </div>
        </div>
        <div className="header-right">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="userlogin">
          {user ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
