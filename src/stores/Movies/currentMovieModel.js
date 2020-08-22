import { types } from "mobx-state-tree";
import { GenresModel } from "./genresModel";
import { ProductCompanyModel } from "./productCompanyMode";
import { ProductCountryModel } from "./productCountryModel";
import { CollectionModel } from "./collectionModel";


export const CurrentMovie = types
    .model('CurrentMovie', {
        adult: types.optional(types.boolean, false),
        backdrop_path: types.maybeNull(types.string),
        belongs_to_collection: types.maybeNull(CollectionModel),
        budget: types.optional(types.number, 0),
        genres:types.optional(types.array(GenresModel), []),
        homepage: types.optional(types.string, ''),
        id:types.optional(types.number, 0),
        imdb_id: types.optional(types.string, ''),
        original_language: types.optional(types.string, ''),
        original_title: types.optional(types.string, ''),
        overview: types.optional(types.string, ''),
        popularity: types.optional(types.number, 0),
        poster_path: types.maybeNull(types.string),
        production_companies:types.optional(types.array(ProductCompanyModel), []),
        production_countries:types.optional(types.array(ProductCountryModel), []),
        release_date: types.optional(types.string, ''),
        revenue: types.optional(types.number,0),
        runtime: types.optional(types.number,0),
        status: types.optional(types.string, ''),
        tagline: types.optional(types.string, ''),
        title: types.optional(types.string, ''),
        video: types.optional(types.boolean,false),
        vote_average: types.optional(types.number,0),
        vote_count: types.optional(types.number,0)
    })