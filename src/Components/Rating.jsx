import React from "react";

import StarSVG from "../assets/icon-star.svg";

const Rating = ({ rating, setRating, setIsSubmit }) => {
  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      setIsSubmit(true);
    }
  };

  return (
    <div id="rating" className="card">
      <div className="star">
        <img src={StarSVG} alt="Star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <div
          className={`btn rating-btn ${rating === 1 ? "active" : ""}`}
          onClick={() => setRating(1)}
        >
          1
        </div>
        <div
          className={`btn rating-btn ${rating === 2 ? "active" : ""}`}
          onClick={() => setRating(2)}
        >
          2
        </div>
        <div
          className={`btn rating-btn ${rating === 3 ? "active" : ""}`}
          onClick={() => setRating(3)}
        >
          3
        </div>
        <div
          className={`btn rating-btn ${rating === 4 ? "active" : ""}`}
          onClick={() => setRating(4)}
        >
          4
        </div>
        <div
          className={`btn rating-btn ${rating === 5 ? "active" : ""}`}
          onClick={() => setRating(5)}
        >
          5
        </div>
      </div>
      <div className="btn submit" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  );
};

export default Rating;
