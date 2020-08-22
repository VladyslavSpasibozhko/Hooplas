import React, {useEffect} from 'react';
import MovieTitle from "../components/moviePage/movieTitle";
import MovieGenres from "../components/moviePage/movieGenres";
import MoviePoster from "../components/moviePage/moviePoster";
import MovieDescription from "../components/moviePage/movieDescription";
import Button from '../elements/button';
import MovieReviews from "../components/moviePage/movieReviews";
import Loader from "../components/loader/loader";
import { useParams } from 'react-router-dom';
import {store} from "../stores/rootModel";
import {observer} from "mobx-react";


import '../components/moviePage/moviePage.css';

const MoviePage = () => {
    const { id } = useParams();
    const { currentMovie, getMovieById } = store.movies;

    useEffect(()=> {
        getMovieById(id)
    }, [id])

    if (!currentMovie.title){
        return <Loader/>
    }

    return (
        <div className='container movie-page-container'>
            <MovieTitle
                title={currentMovie.title}
            />
            <MovieGenres
                data={currentMovie.genres}
                vote_count={currentMovie.vote_count}
                rating={currentMovie.vote_average}
            />
            <div className='flex movie-info-container'>
                <MoviePoster path={currentMovie.poster_path}/>
                <MovieDescription
                    companies={currentMovie.production_companies}
                    tagline={currentMovie.tagline}
                    desc={currentMovie.overview}
                    releaseDate={currentMovie.release_date}
                />
            </div>
            <div className='flex justify-end paddingY_10'>
                <Button
                    text='Add'
                    className='movie-favourite-button'
                />
            </div>
            <MovieReviews {...{id}}/>
        </div>
    );
};

export default observer(MoviePage);