import React from "react";
import PropTypes from "prop-types";
import Background from "./../images/footerBackground.svg";

import "../styles/imports.scss";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="box">
        <div className="column">
          <p1 className="footer">
            {" "}
            &copy;{new Date().getFullYear()} ISP Term Project | All rights
            reserved | Terms of Service | Privacy <br /> Stephan Gunawardana
            Danielle Reed Douglas Rudy
          </p1>
        </div>
        <div className="background"></div>
      </div>
    </footer>
  );
};

export default Footer;
