import React from 'react';
import PropTypes from "prop-types";

import '../styles/imports.scss'

const Footer= () => {
    return (
        <div className="main-footer">
            <div className="box">
                    <div className="column">
                       <p1 className="footer"> &copy;{new Date().getFullYear()} MEMEZ | All rights reserved | Terms of Service | Privacy</p1>
                    </div>
            </div>
        </div>

    )
}

export default Footer;