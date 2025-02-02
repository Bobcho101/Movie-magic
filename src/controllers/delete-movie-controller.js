import { Router } from "express";
import Movie from "../models/MoviesModel.js";
import { deleteMovie, getOne } from "../services/movie-services.js";
import { isUser } from "../middlewares/auth-middleware.js";
const deleteMovieController = Router();

deleteMovieController.get("/details/:movieId/delete", isUser, async (req, res) => {
    const userId = req.user.id;
    const movieId = req.params.movieId;
    const currentMovie = await getOne(movieId);
    const currentMovieCreatorId = currentMovie.creator;


    if(currentMovieCreatorId.toString() != userId || userId == undefined){
        return res.redirect('/404');
    }

    await deleteMovie(movieId);
    res.redirect('/');
});

export default deleteMovieController;