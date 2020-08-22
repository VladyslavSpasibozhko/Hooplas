import React from 'react';
import Card from "../card/card";
import Button from "../../elements/button";
import Loader from "../loader/loader";
import { observer } from "mobx-react";

import './cardsContainer.css';

const CardsContainer = ({ data, page, pagesTotal, increment, decrement }) => {

    if (!data) return <Loader/> ;

    return (
        <div className='flex50 flex cards-container'>
            {
                data.map(item => <Card key={item.id} {...{item}}/>)
            }
            <Button
                onClick={decrement}
                className='button prev'
                text='Prev'
            />
            <Button
                onClick={increment}
                className='button next'
                text='Next'
            />
            <div className='items-length'>Page {page} - of {pagesTotal}</div>
        </div>
    );
};


export default observer(CardsContainer);