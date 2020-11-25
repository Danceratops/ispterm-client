import React from "react";
import PropTypes from "prop-types";

import "../styles/imports.scss";

const HomeCard = ({ Name, Description, Price, Image }) => {
  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img class="img" src={Image} />
        </div>
        <div class="product-title">
          <h4>{Name}</h4>
        </div>
        <div class="product-description">
          <h4>Excellent for:{Description}</h4>
        </div>
        <div class="product-price">
          <h4>${Price}/lb</h4>
        </div>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  Name: PropTypes.string,
  Description: PropTypes.string,
  Price: PropTypes.string,
  Image: PropTypes.string,
};
export default HomeCard;
