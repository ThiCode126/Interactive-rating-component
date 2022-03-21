import React from "react";

import TySVG from "../assets/illustration-thank-you.svg";

const Thank = ({ rating }) => {
  return (
    <div id="thank" className="card">
      <img src={TySVG} alt="Star" />
      <p className="note">You selected {rating} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thank;
