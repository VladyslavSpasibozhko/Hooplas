import { types } from "mobx-state-tree";

export const MovieModel = types
    .model('MovieModel', {
        popularity: types.number,
        vote_count: types.number,
        video: types.boolean,
        poster_path: types.maybeNull(types.string),
        id: types.number,
        adult: types.boolean,
        backdrop_path: types.maybeNull(types.string),
        original_language: types.string,
        original_title: types.string,
        genre_ids: types.optional(types.array(types.number), []),
        title: types.string,
        vote_average: types.number,
        overview: types.string,
        release_date: types.optional(types.string, ''),
    });