import { visitFunctionBody } from "typescript";
import Cast from "../models/CastsModel.js";
import Movie from "../models/MoviesModel.js";

export async function createCast(formData){
    return await Cast.create(formData);
}

export async function getCasts(existingCasts) {
    if(existingCasts.length > 0){
        const casts = await Cast.find({_id: {$nin: existingCasts}});
        return casts;
    } else{
        const casts = await Cast.find({});
        return casts;
    }
}

export async function attachCast(movieId, castId){
    const movie = await Movie.findById(movieId);
    movie.casts.push(castId);
    await movie.save();
}

export async function getCastsForRender(castIds) {
    return Cast.find({_id: { $in: castIds}});
}
