import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import "./storemanager.css";
import DeleteProduct from "./DeleteProduct";

const StoreManager = ({ username }) => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);
  const [showDeleteProductForm, setShowDeleteProductForm] = useState(false);

  const handleAddProductClick = () => {
    setShowAddProductForm(true);
    setShowUpdateProductForm(false);
    setShowDeleteProductForm(false);
  };

  const handleUpdateProductClick = () => {
    setShowUpdateProductForm(true);
    setShowAddProductForm(false);
    setShowDeleteProductForm(false);
  };

  const handleDeleteProductClick = () => {
    setShowDeleteProductForm(true);
    setShowAddProductForm(false);
    setShowUpdateProductForm(false);
  };

  return (
    <div>
      <div>Welcome, {username}!</div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/data-visualization">Data Visualization</Link>
          </li>
          <li>
            <Link to="/data-analytics">Data Analytics</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/sales-report">Sales Report</Link>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <button className="action-button" onClick={handleAddProductClick}>
          Add Product
        </button>
        <button className="action-button" onClick={handleUpdateProductClick}>
          Update Product
        </button>
        <button className="action-button" onClick={handleDeleteProductClick}>
          Delete Product
        </button>
      </div>
      {showAddProductForm && <AddProduct />}
      {showUpdateProductForm && <UpdateProduct />}
      {showDeleteProductForm && <DeleteProduct />}
    </div>
  );
};

export default StoreManager;
