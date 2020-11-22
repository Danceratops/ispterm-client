import React from "react";
import PropTypes from "prop-types";

import "../styles/imports.scss";
import { People } from "@material-ui/icons";

const HomeCard = ({ children, Name, Description, Price, Image }) => {
  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img class="img" src={Image} />
        </div>
        <div class="title">
          <h4>{Name}</h4>
        </div>
        <div class="description">
          <h4>{Description}</h4>
        </div>
        <div class="price">
          <h4>{Price}</h4>
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
