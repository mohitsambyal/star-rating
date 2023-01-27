import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <div>
        <h1>Star Rating</h1>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            return (
              <button
                className={index + 1 <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index + 1)}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <h4>Star:{rating}</h4>
      </div>
    </>
  );
};
export default StarRating;
