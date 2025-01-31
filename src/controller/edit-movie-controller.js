import { Router } from "express";
import { getCategories, getOne } from "../services/movie-services.js";
const editMovieController = Router();

editMovieController.get('/details/:movieId/edit', async (req, res) => {
    const currentMovieId = req.params.movieId;
    const currentMovie = await getOne(currentMovieId);
    const movie = currentMovie;
    const categories = getCategories(movie.category);
    
    res.render('movie/movie-edit', { movie, categories });
});

export default editMovieController;