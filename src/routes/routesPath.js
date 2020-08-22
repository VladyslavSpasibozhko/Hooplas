import Movies from '../pages/movies';
import Companies from "../pages/companies";
import People from "../pages/people";
import Tv from "../pages/tv";
import MoviePage from "../pages/moviePage";

export const pathData = [
    {
        path:'/movies',
        component:Movies,
        exact:false
    },
    {
        path:'/movie/:id',
        component:MoviePage,
        exact:true
    },
    {
        path:'/companies',
        component:Companies,
        exact:false
    },
    {
        path:'/people',
        component:People,
        exact:false
    },
    {
        path:'/tv',
        component:Tv,
        exact:false
    }
];