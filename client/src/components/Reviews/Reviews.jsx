import React, { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/myStore/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>{review.title}</p>
            <p>{review.reviewText}</p>
            {/* Add other relevant review details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
