import React from 'react';
// eslint-disable-next-line
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

import '../styles/imports.scss'

const Card = ({ title, price, description, imageSource}) => {
    return (
        <div class="container">
            <div class="image">
                <img src={imageSource} alt={title}></img>
            </div>
            <div class="generaltext">
                <div class="price-title">
                    <Link to={`/products/${title}`}><h3>{title}</h3></Link>
                    <h4>${price}/lb</h4>
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
    price: PropTypes.number,
    description: PropTypes.string,
    imageSource: PropTypes.string
}

export default Card