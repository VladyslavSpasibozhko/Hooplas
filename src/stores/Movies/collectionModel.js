import { types } from "mobx-state-tree";
export const CollectionModel = types
    .model('CollectionModel', {
        id: types.number,
        name: types.string,
        poster_path: types.string,
        backdrop_path: types.string
    })