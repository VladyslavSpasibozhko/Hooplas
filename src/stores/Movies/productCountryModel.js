import { types } from "mobx-state-tree";

export const ProductCountryModel = types
    .model('ProductCountryModel', {
        iso_3166_1: types.string,
        name: types.string
    })