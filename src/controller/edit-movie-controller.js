import { Router } from "express";
import { getOne } from "../services/movie-services.js";
const editMovieController = Router();

editMovieController.get('/details/:movieId/edit', async (req, res) => {
    const currentMovieId = req.params.movieId;
    const currentMovie = await getOne(currentMovieId);
    const movie = currentMovie;
    res.render('movie/movie-edit', { movie });
});

export default editMovieController;