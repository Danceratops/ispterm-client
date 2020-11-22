import React from "react";
import Background from "./../images/footerBackground.svg";

import "../styles/imports.scss";
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
        <footer>
          &copy;{new Date().getFullYear()} ISP Term Project | Stephan
          Gunawardana Danielle Reed Douglas Rudy
        </footer>
      </div>
    </div>
  );
};

export default Footer;
