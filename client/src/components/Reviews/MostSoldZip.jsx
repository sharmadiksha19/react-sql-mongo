import React, { useState, useEffect } from "react";
import axios from "axios";

const MostSoldZip = () => {
  const [mostSoldZip, setMostSoldZip] = useState([]);

  useEffect(() => {
    axios
      .get("/mostSoldZip")
      .then((response) => {
        setMostSoldZip(response.data);
      })
      .catch((error) => {
        console.error("Error fetching most sold by zip:", error);
      });
  }, []);

  return (
    <div>
      <h1>Most Sold by Zip</h1>
      <ul>
        {mostSoldZip.map((item) => (
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

export default MostSoldZip;
