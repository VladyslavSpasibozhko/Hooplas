import React from 'react';
import MoviesProductsCompany from "./moviesProductsCompany";

const MovieDescription = ({ tagline, desc, releaseDate, companies}) => {
    return (
        <div className='flex50 movie-description-container'>
            <div className='movie-tagline'>{tagline}</div>
            <MoviesProductsCompany
                data={companies}
            />
            <div className='movie-overview'>{desc}</div>
            <div className='movie-release-date'>
                <span>Release date:</span> {releaseDate}
            </div>
        </div>
    );
};

export default MovieDescription;