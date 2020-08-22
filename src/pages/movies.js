import React from 'react';
import CarouselComponent from "../components/carousel/carousel";
import Navigate from "../routes/navigate";
import { moviesPath } from "../routes/moviesRoutes/moviesPath";


const Movies = () => {
    return (
        <>
            <CarouselComponent/>
            <Navigate data={moviesPath}/>
        </>
    );
};

export default Movies;