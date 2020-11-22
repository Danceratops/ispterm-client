import React from 'react';
// eslint-disable-next-line
import PropTypes from "prop-types";

import '../styles/imports.scss'

const Card = ({ title, price, description, imageSource}) => {
    return (
        <div class="container">
            <div class="image">
                <img src={imageSource}></img>
            </div>
            <div class="generaltext">
                <div class="price-title">
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                </div>
                <div class="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    imageSource: PropTypes.string
}

export default Card