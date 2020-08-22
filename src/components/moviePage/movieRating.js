import React from 'react';
import Rating from 'react-rating';

const StarEmpty =()=> (
    <span className='star-empty'>
        <i className="far fa-star"></i>
    </span>
);
const StarFull =()=> (
    <span className='star-full'>
        <i className="fas fa-star"></i>
    </span>
);

const MovieRating = ({ rating, vote_count }) => {
    return (
        <div className='movie-rating-container'>
            <Rating
                className='movie-rating'
                start={0}
                stop={10}
                initialRating={rating}
                readonly={true}
                fractions={2}
                emptySymbol={<StarEmpty/>}
                fullSymbol={<StarFull/>}
            />
           <span className='vote_count'> ({vote_count}) </span>
        </div>
    );
};

export default MovieRating;