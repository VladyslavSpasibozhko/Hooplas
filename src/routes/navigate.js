import React from 'react';
import { Route } from 'react-router-dom';

const Navigate = ({ data }) => {
    return (
        <>
            {
                data.map((item, index) => <Route key={index} {...item}/>)
            }
        </>
    );
};

export default Navigate;