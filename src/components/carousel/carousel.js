import React, {useEffect} from 'react';
import CarouselSlider from 'react-carousel-slider';
import Loader from "../loader/loader";
import { observer } from "mobx-react";
import { slidesArray } from "./carouselSlides";
import { store } from "../../stores/rootModel";

import './carousel.css'


const CarouselComponent = () => {
    const { getUpcomingMovies, upcomingMovies } = store.movies.upcoming;

    useEffect(()=> {
        getUpcomingMovies();
    }, [upcomingMovies]);

    const dataComponents = slidesArray(upcomingMovies);

    if (!dataComponents.length){
        return <Loader/>
    }

    return (
        <div className='container '>
            <CarouselSlider slideCpnts ={dataComponents}/>
        </div>
    );
};

export default observer(CarouselComponent);