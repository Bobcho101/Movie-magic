import movies from "./movies.js"

export function getOne(id) {
    const movie = movies.find(movie => movie.id === id);
    return movie;
}
export function getAllFilteredMovies(filter = {}){
    let result = movies;
    if(filter.search){
        result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    }
    if(filter.genre){
        result = result.filter(movie => movie.genre.toLowerCase().includes(filter.genre.toLowerCase()));
    }

    

    return result;
}