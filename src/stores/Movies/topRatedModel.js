import { types, flow } from "mobx-state-tree";
import { movies } from "./movies";
import { MovieModel } from "./movieModel";

export const TopRatedModel = types
    .model('TopRatedModel', {
        topRatedMovies:types.array(MovieModel),
        page: types.optional(types.number, 1) ,
        pagesTotal: types.optional(types.number, 1)
    })
    .actions(self => ({
        getTopRatedMovies:flow(function *(page) {
            try {
                const res = yield movies.getTopRated(page);
                const resData = res.data;
                self.page = resData.page;
                self.pagesTotal = resData.total_pages;
                self.topRatedMovies = resData.results;
            }catch (e) {
                console.log(e)
            }
        })
    }))