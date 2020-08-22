import { types } from "mobx-state-tree";
import { AuthModel } from "./Auth/authModel";
import { RootMoviesModel } from "./Movies";

const RootModel = types.model('RootModel', {
    auth:types.optional(AuthModel, {}),
    movies:types.optional( RootMoviesModel, {})
});

export const store = RootModel.create()
console.log(store)