import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className='container loading-container'>
            <i className="fas fa-spinner fa-pulse"></i>
        </div>
    );
};

export default Loader;