import React from "react";
import PropTypes from "prop-types";

import "../styles/imports.scss";

const homecards = ({ children }) => {
  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img class="img" src="https://picsum.photos/200" />
        </div>
        <div class="title">
          <h3>name</h3>
        </div>
        <div class="description">
          <h4>Excellent for:</h4>
        </div>
        <div class="price">
          <h5>$Price(Item)/lb</h5>
        </div>
      </div>
    </div>
  );
};

export default homecards;
