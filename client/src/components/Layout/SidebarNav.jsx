// SidebarNav.jsx
import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import "./SidebarNav.css";

const SidebarNav = () => {
  return (
    <div className="sidebar-container">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/products/doorBells">Door Bells</Link>
          </li>
          <li>
            <Link to="/products/doorLocks">Door Locks</Link>
          </li>
          <li>
            <Link to="/products/lights">Lights</Link>
          </li>
          <li>
            <Link to="/products/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/products/thermostats">Thermostats</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Content />
      </div>
    </div>
  );
};

export default SidebarNav;
