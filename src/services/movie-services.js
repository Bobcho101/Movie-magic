import Movie from "../models/MoviesModel.js";

export async function getOne(id) {
    // const movie = movies.find(movie => movie.id === id);
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