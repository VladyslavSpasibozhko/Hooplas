import Popular from "../../pages/popular";
import Top from "../../pages/top";
import ByGenres from "../../pages/byGenres";


export const moviesPath = [
    {
        path:'/movies/popular',
        component:Popular,
        exact:true
    },
    {
        path:'/movies/top',
        component:Top,
        exact:true
    },
    {
        path:'/movies/genre/:id',
        component:ByGenres,
        exact:true
    },
];