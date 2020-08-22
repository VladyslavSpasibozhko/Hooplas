import { types, flow } from "mobx-state-tree";
import { movies } from "./movies";
import { MovieModel } from "./movieModel";

export const ByGenresMovies = types
    .model('ByGenresMovies', {
        byGenresMovies:types.array(MovieModel),
        page: types.optional(types.number, 1) ,
        pagesTotal: types.optional(types.number, 1)
    })
    .actions(self => ({
        getMoviesWithGenre:flow(function *(id, page) {
            try {
                const res = yield movies.getByGenres(id, page);
                const resData = res.data;
                self.page = resData.page;
                self.pagesTotal = resData.total_pages;
                self.byGenresMovies = resData.results;
            }catch (e) {
                console.log(e)
            }
        })
    }))