import Cast from "../models/CastsModel.js";
import Movie from "../models/MoviesModel.js";

export async function getOne(id) {
    const movie = await Movie.findById(id);

    return movie;
}
export async function getAllFilteredMovies(filter = {}){
    let result = await Movie.find({});

    if(filter.search){
        result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    }
    if(filter.genre){
        result = result.filter(movie => movie.genre.toLowerCase().includes(filter.genre.toLowerCase()));
    }

    if(filter.year){
        result = result.filter(movie => movie.year.toLowerCase().includes(filter.year.toLowerCase()));
    }

    return result;
}
export function createMovie(formData) {
    Movie.create(formData);
}
export function createCast(formData){
    Cast.create(formData);
}