import React from 'react';
import PropTypes from "prop-types";

const Hero = ({ title, subtitle, backgroundImg, children }) => {

    return (
        <header class="mainHeader" style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}>
            <div class="title">
                <h1 class="titleHeader">
                    {title}
                </h1>
                <h3 class="subheader">
                    {subtitle}
                </h3>
            </div>
            <div>
                {children}
            </div>
        </header>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    backgroundImg: PropTypes.string,
}

export default Hero