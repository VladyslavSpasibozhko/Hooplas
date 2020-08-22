import {getParent, types} from "mobx-state-tree";
import { RootMoviesModel } from "./index";

export const GenresModel = types
    .model('GenresModel', {
        id: types.number,
        name: types.string
    })
