import axios from 'axios';

export const register = 'accounts:signUp?key=AIzaSyAbFPMupFZrCSvxSM2s1bMn-DQTtw_hP1Y';
export const login = 'accounts:signInWithPassword?key=AIzaSyAbFPMupFZrCSvxSM2s1bMn-DQTtw_hP1Y';
export const getUserToken = 'accounts:lookup?key=AIzaSyAbFPMupFZrCSvxSM2s1bMn-DQTtw_hP1Y';

export const authReq = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1'
});


export const moviesApiKey = 'api_key=593be2335a3223904f7ba52d3387fe16';
export const upcoming = `movie/upcoming?${moviesApiKey}`;
export const genres = `genre/movie/list?${moviesApiKey}`;
export const moviesByGenres = `discover/movie?api_key=593be2335a3223904f7ba52d3387fe16&page=1`;
export const topRated = `movie/top_rated?${moviesApiKey}`;
export const popular = `movie/popular?${moviesApiKey}`;

export const moviesReq = axios.create({
    baseURL:'https://api.themoviedb.org/3'
});
