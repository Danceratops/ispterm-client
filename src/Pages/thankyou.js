import React from "react";
import { Link } from "react-router-dom";

const Thankyou = ( ) => {
  return (
    <div className="thank-you-container">
      <h1>Welcome to our community!</h1>
      <h2>Enjoy the products we have and look forward to those to come.</h2>
      <p>Check out all of our products <Link className="thank-you-link" to="/search">here</Link>!</p>
    </div>
  );
};

export default Thankyou;
