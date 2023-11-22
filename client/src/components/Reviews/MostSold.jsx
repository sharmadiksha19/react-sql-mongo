import React, { useState, useEffect } from "react";
import axios from "axios";

const MostSold = () => {
  const [mostSold, setMostSold] = useState([]);

  useEffect(() => {
    axios
      .get("/mostSold")
      .then((response) => {
        setMostSold(response.data);
      })
      .catch((error) => {
        console.error("Error fetching most sold reviews:", error);
      });
  }, []);

  return (
    <div>
      <h1>Most Sold Reviews</h1>
      <ul>
        {mostSold.map((item) => (
          <li key={item._id}>
            <p>{item._id}</p>
            <p>{item.count}</p>
            {/* Add other relevant details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostSold;
