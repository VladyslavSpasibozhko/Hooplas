import { types, flow } from "mobx-state-tree";
import { movies } from "./movies";
import { MovieModel } from "./movieModel";

export const UpcomingMovies = types
    .model('UpcomingModel', {
        upcomingMovies:types.array(MovieModel)
    })
    .actions(self => ({
        getUpcomingMovies:flow(function *() {
            try {
                const res = yield movies.getUpcomingMovies();
                const resData = res.data;
                self.upcomingMovies = resData.results;
            }catch (e) {
                console.log(e)
            }
        })
    }))