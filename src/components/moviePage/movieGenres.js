import React from 'react';
import MovieRating from "./movieRating";

const MovieGenres = ({ data, rating, vote_count }) => {
    return (
        <div className='flex align-center space-between movie-genre'>
            <div  className='flex'>
                {
                    data.map(item => (
                        <div
                            className='movie-genre-item'
                            key={item.id}
                        >
                            {item.name}
                        </div>
                    ))
                }
            </div>
            <MovieRating
                {...{rating}}
                {...{vote_count}}
            />
        </div>
    );
};

export default MovieGenres;