import { visitFunctionBody } from "typescript";
import Cast from "../models/CastsModel.js";
import Movie from "../models/MoviesModel.js";

export function createCast(formData){
    Cast.create(formData);
}

export async function getCasts() {
    const casts = await Cast.find({});
    return casts;
}

export async function attachCast(movieId, castId){
    const movie = await Movie.findById(movieId);
    movie.casts.push(castId);
    await movie.save();
}
