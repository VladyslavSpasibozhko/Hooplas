import {flow, types} from "mobx-state-tree";
import {UpcomingMovies} from "./upcomingModel";
import {GenresModel} from "./genresModel";
import { movies } from "./movies";
import {PopularMovies} from "./popularModel";
import {TopRatedModel} from "./topRatedModel";
import {ByGenresMovies} from "./byGenresModel";
import {CurrentMovie} from "./currentMovieModel";
import {ReviewModel} from "./reviewModel";

export const RootMoviesModel = types
    .model('RootMoviesModel', {
        upcoming:types.optional(UpcomingMovies, {}),
        genres:types.array(GenresModel),
        popular:types.optional(PopularMovies, {}),
        topRated:types.optional(TopRatedModel, {}),
        byGenre:types.optional(ByGenresMovies, {}),
        currentMovie:types.optional(CurrentMovie, {}),
        reviews:types.optional(types.array(ReviewModel), [])
    })
    .views(self => ({
        getGenreName:function (id) {
            const genreData = self.genres.find(item => id == item.id);
            return (genreData && genreData.name) || ''
        }
    }))
    .actions(self => ({
        getGenres:flow(function *() {
            try {
                const res = yield movies.getGenres();
                self.genres =  res.data.genres;
            }catch (e) {
                console.log(e)
            }
        }),
        getMovieById:flow(function *(id) {
            try {
                const res = yield movies.getMovieById(id);
                self.currentMovie = res.data;
            }catch (e) {
                console.log(e)
            }
        }),
        getReviews:flow(function *(id) {
            try {
                const res = yield movies.getReviews(id);
                self.reviews = res.data.results;
            }catch (e) {
                console.log(e)
            }
        })
    }));