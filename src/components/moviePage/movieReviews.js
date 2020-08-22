import React, {useEffect} from 'react';
import ReviewItem from "./reviewItem";
import { store } from "../../stores/rootModel";
import {observer} from "mobx-react";

const MovieReviews = ({ id }) => {

    const { reviews, getReviews } = store.movies;

    useEffect(()=> {
        getReviews(id)
    }, [id]);

    return (
        <div className='movie-reviews-container'>
            {
                reviews.map(item => (
                    <ReviewItem
                        key={item.id}
                        {...{item}}
                    />
                ))
            }
        </div>
    );
};

export default observer(MovieReviews);