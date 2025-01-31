import { Router } from "express";
import Movie from "../models/MoviesModel.js";
import { deleteMovie, getOne } from "../services/movie-services.js";
const deleteMovieController = Router();

deleteMovieController.get("/details/:movieId/delete", async (req, res) => {
    let userId;
    try {
        userId = req.user.id;
    } catch(err){
        console.log(err.message);
    }
    
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