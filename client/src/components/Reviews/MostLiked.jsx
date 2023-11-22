import React, { useState, useEffect } from "react";
import axios from "axios";

const MostLiked = () => {
  const [mostLiked, setMostLiked] = useState([]);

  useEffect(() => {
    axios
      .get("/mostLiked")
      .then((response) => {
        setMostLiked(response.data);
      })
      .catch((error) => {
        console.error("Error fetching most liked reviews:", error);
      });
  }, []);

  return (
    <div>
      <h1>Most Liked Reviews</h1>
      <ul>
        {mostLiked.map((review) => (
          <li key={review._id}>
            <p>{review._id.reviewRating}</p>
            {/* Add other relevant details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostLiked;
