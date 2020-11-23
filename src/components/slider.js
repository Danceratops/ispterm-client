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
        slidesPerPage={3}
        dots
        breakpoints={{
          1400: {
            slidesPerPage: 2,
            slidesToScroll: 1,
          },
          1024: {
            slidesPerPage: 1,
            slidesToScroll: 1,
          },
          900: {
            slidesPerPage: 1,
            slidesToScroll: 1,
          },
        }}
      >
        {children}
      </Carousel>
    </div>
  );
}

Slider.propTypes = {
  title: PropTypes.string,
};
