import React from 'react';
import img from '../../images/1.jpg'

const MoviePoster = ({ path }) => {

    const imgPath = `https://image.tmdb.org/t/p/w500/${path}`

    return (
        <div className='flex25 movie-poster'>
            <img src={imgPath} alt="poster"/>
        </div>
    );
};

export default MoviePoster;