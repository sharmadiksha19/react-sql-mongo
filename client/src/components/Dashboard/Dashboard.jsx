import React from "react";
import Bestseller from "./Bestseller";

const Dashboard = () => {
  // Assuming you have an array of bestseller productIds
  const bestsellerProductIds = [
    "AnkerEufy",
    "eufy",
    "Apple",
    "Govee",
    "Amazon",
  ];

  return (
    <div className="dashboard-container">
      <h2>Bestsellers</h2>
      <div className="bestsellers-list">
        {bestsellerProductIds.map((productId) => (
          <Bestseller key={productId} productId={productId} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
