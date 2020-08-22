import {types} from "mobx-state-tree";

export const ReviewModel = types
    .model('ReviewModel', {
        id: types.string,
        author: types.string,
        content: types.string,
        url: types.string
    })
