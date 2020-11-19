import React from 'react';
import PropTypes from "prop-types";
//import Background from '/herbsIcon.svg'

import '../styles/imports.scss'

const Footer= () => {
    return (
        <div className="main-footer">
            <div className="box">
                    <div className="column">
                    <img src={process.env.PUBLIC_URL + '/herbsIcon.svg'} /> 
                       <p1 className="footer"> &copy;{new Date().getFullYear()} ISP Term Project | All rights reserved | Terms of Service | Privacy  <br/> Stephan Gunawardana Danielle Reed Douglas Rudy</p1>
                    </div>
                    <div className="background">
                    </div>
            </div>
        </div>
        
    )
}

export default Footer;