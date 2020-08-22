import {
    moviesReq,
    upcoming,
    genres,
    popular,
    topRated,
    moviesByGenres, moviesApiKey
} from "../../axios/axios";

class Movies {
    getUpcomingMovies =()=> moviesReq.get(upcoming);

    getGenres =()=> moviesReq.get(genres);

    getPopular =(page)=> moviesReq.get(`${popular}&page=${page}`);

    getByGenres =(id, page)=> moviesReq.get(`${moviesByGenres}&with_genres=${id}&page=${page}`);

    getTopRated =(page)=> moviesReq.get(`${topRated}&page=${page}`);

    getMovieById =(id)=> moviesReq.get(`movie/${id}?${moviesApiKey}`);

    getReviews =(id)=>  moviesReq.get(`/movie/${id}/reviews?${moviesApiKey}`);
}

export const movies = new Movies();