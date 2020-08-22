import React from 'react';
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import SortSelect from "../sortSelect/sortSelect";
import './secHeader.css'

const SecHeader = () => {
    return (
        <div className='sec-header container flex space-between align-center'>
            <BreadCrumbs/>
            <SortSelect/>
        </div>
    );
};

export default SecHeader;