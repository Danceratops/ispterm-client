import React from "react";
import Background from "./../images/footerBackground.svg";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      ></footer>
      <div class="subfooter">
        <small>
          &copy;{new Date().getFullYear()} ISP Term Project | Stephan
          Gunawardana Danielle Reed Douglas Rudy
        </small>
      </div>
    </div>
  );
};

export default Footer;
