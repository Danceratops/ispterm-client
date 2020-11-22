import React from "react";
import Background from "./../images/footerBackground.svg";

const Footer = () => {
  return (
    <div className="complete-footer">
      <footer
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      ></footer>
      <div className="subfooter">
        <small>
          &copy;{new Date().getFullYear()} ISP Term Project | Stephan
          Gunawardana Danielle Reed Douglas Rudy
        </small>
      </div>
    </div>
  );
};

export default Footer;
