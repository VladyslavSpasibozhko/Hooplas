import React from 'react';
import {observer} from "mobx-react";

const MoviesProductsCompany = ({ data }) => {

    return (
        <div className='flex companies-container'>
            {
                data.map(item => (
                    <div key={item.id} className='company-item'>
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
};

export default observer(MoviesProductsCompany) ;