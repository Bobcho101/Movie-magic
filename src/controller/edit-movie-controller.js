import { Router } from "express";
const editMovieController = Router();

editMovieController.get('/details/:movieId/edit', (req, res) => {
    res.render('movie/movie-edit');
});

export default editMovieController;