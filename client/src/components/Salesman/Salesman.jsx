import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateCustomer from "./CreateCustomer";
import "./Salesman.css";

const Salesman = () => {
  const [ShowAddCustomerForm, SetshowAddCustomerForm] = useState(false);
  const [ShowAddOrderForm, SetshowAddOrderForm] = useState(false);
  const [ShowUpdateOrderForm, SetshowUpdateOrderForm] = useState(false);
  const [ShowDeleteOrderForm, SetshowDeleteOrderForm] = useState(false);

  const handleAddCustomerClick = () => {
    SetshowAddCustomerForm(true);
    SetshowAddOrderForm(false);
    SetshowUpdateOrderForm(false);
    SetshowDeleteOrderForm(false);
  };

  const handleAddOrderClick = () => {
    SetshowAddCustomerForm(false);
    SetshowAddOrderForm(true);
    SetshowUpdateOrderForm(false);
    SetshowDeleteOrderForm(false);
  };

  const handleUpdateOrderClick = () => {
    SetshowAddCustomerForm(false);
    SetshowAddOrderForm(false);
    SetshowUpdateOrderForm(true);
    SetshowDeleteOrderForm(false);
  };

  const handleDeleteOrderClick = () => {
    SetshowAddCustomerForm(false);
    SetshowAddOrderForm(false);
    SetshowUpdateOrderForm(false);
    SetshowDeleteOrderForm(true);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/orders-list">Orders</Link>
          </li>
          <li>
            <Link to="/customers-list">Customers</Link>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <button className="action-button" onClick={handleAddCustomerClick}>
          Create Customer
        </button>
        <button className="action-button" onClick={handleAddOrderClick}>
          Create Order
        </button>
        <button className="action-button" onClick={handleUpdateOrderClick}>
          Update Order
        </button>
        <button className="action-button" onClick={handleDeleteOrderClick}>
          Delete Order
        </button>
      </div>
      {ShowAddCustomerForm && <CreateCustomer />}
      {ShowAddOrderForm && <CreateOrder />}
      {ShowUpdateOrderForm && <UpdateOrder />}
      {ShowDeleteOrderForm && <DeleteOrder />}
    </div>
  );
};

export default Salesman;
