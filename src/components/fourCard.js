import React from "react";
import PropTypes from "prop-types";


import { Link } from 'react-router-dom';

export default function FourCard({ title, subtitle, arrayOfExamples }) {
  const exampleItems = arrayOfExamples.map((exampleItem) => (
    <li key={exampleItem.exampleName}>
      <Link to={`/products/${exampleItem.exampleName}`}>
        <img src={exampleItem.exampleImage} alt={exampleItem.exampleImageAlt} />
        <h6>
          <i>{exampleItem.exampleName}</i>
        </h6>
      </Link>
    </li>
  ));

  return (
    <div class="four-card">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <ul class="card-examples">{exampleItems}</ul>
    </div>
  );
}

FourCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  arrayOfExamples: PropTypes.shape({
    exampleImage: PropTypes.string,
    exampleImageAlt: PropTypes.string,
    exampleName: PropTypes.string,
  }),
};
