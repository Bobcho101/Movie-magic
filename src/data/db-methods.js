import movies from "./movies.js"

export function getOne(id) {
    const movie = movies.find(movie => movie.id === id);
    return movie;
}