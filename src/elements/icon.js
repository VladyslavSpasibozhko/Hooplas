import React from 'react';
import { Link } from "react-router-dom";

const Icon = ({ icon }) => {
    return (
        <Link to='/'>
            <div className={`fab ${icon}`} ></div>
        </Link>
        );
};

export default Icon;