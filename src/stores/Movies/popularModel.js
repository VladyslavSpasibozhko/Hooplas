import { types, flow } from "mobx-state-tree";
import { movies } from "./movies";
import { MovieModel } from "./movieModel";

export const PopularMovies = types
    .model('PopularMovies', {
        popularMovies:types.array(MovieModel),
        page: types.optional(types.number, 1) ,
        pagesTotal: types.optional(types.number, 1)
    })
    .actions(self => ({
        getPopularMovies:flow(function *(page) {
            try {
                const res = yield movies.getPopular(page);
                const resData = res.data;
                self.page = resData.page;
                self.pagesTotal = resData.total_pages;
                self.popularMovies = resData.results;
            }catch (e) {
                console.log(e)
            }
        })
    }))