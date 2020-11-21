import React from 'react';
// eslint-disable-next-line
import PropTypes from "prop-types";

import '../styles/imports.scss'

const Card = () => {
    return (
        <div class="container">
            <div class="image">
                {/*eslint-disable-next-line*/}
                <img src="https://www.uakron.edu/contentAsset/image/1c5c9d78-d829-4a80-ba2a-32f1f70b9944/fileAsset/byInode/1/filter/Resize/resize_w/140"></img>
            </div>
            <div class="generaltext">
                <div class="price-title">
                    <h3><b>Hello</b></h3>
                    <h4>Price</h4>
                </div>
                <div class="description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore </p>
                </div>
            </div>
        </div>
    )
}

export default Card