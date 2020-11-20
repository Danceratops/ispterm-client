import React from "react";
import PropTypes from "prop-types";
import Background from "./../images/footerBackground.svg";

import "../styles/imports.scss";
import { red } from "@material-ui/core/colors";
const Footer = () => {
  return (
    <div className="main-footer">
      <div
        className="container"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        &copy;{new Date().getFullYear()} ISP Term Project <br /> Stephan
        Gunawardana Danielle Reed Douglas Rudy
      </div>
    </div>
  );
};

export default Footer;
