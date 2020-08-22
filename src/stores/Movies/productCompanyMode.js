import { types } from "mobx-state-tree";

export const ProductCompanyModel = types
    .model('ProductCompanyModel', {
        id: types.number,
        logo_path: types.maybeNull(types.string),
        name: types.string,
        origin_country: types.string
    })