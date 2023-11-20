// Customer.jsx
import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SidebarNav from "../Layout/SideBarNav";

const Salesman = ({ username }) => {
  return (
    <div>
      <Header />
      <SidebarNav />
      <div>Welcome, {username}!</div>
      <Footer />
    </div>
  );
};

export default Salesman;
