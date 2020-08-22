import React from 'react';

const SideBarTitleItem = ({ title, onClick }) => {
    return (
        <div className='side-bar-block-container'>
            <div
                {...{onClick}}
                className='side-bar-title-name'>
                {title}
            </div>
        </div>
    );
};

export default SideBarTitleItem;