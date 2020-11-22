import React from "react";
import PropTypes from "prop-types";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function Slider({ children, title }) {
  return (
    <div class="slider-container">
      <h2>{title}</h2>
      <Carousel
        className="slider"
        arrows
        infinite
        centered
        slidesPerPage={2}
        dots
      >
        {children}
      </Carousel>
    </div>
  );
}

Slider.propTypes = {
  title: PropTypes.string,
};
