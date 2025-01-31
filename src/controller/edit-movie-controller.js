import { Router } from "express";
import { ObjectId } from "mongodb";
import { getCategories, getOne, updateMovie } from "../services/movie-services.js";
import {isUser} from "../middlewares/auth-middleware.js";
const editMovieController = Router();

editMovieController.get('/details/:movieId/edit', isUser, async (req, res) => {
    const currentMovieId = req.params.movieId;
    const currentMovie = await getOne(currentMovieId);
    const movie = currentMovie;
    const categories = getCategories(movie.category);

    
    res.render('movie/movie-edit', { movie, categories });
});

editMovieController.post('/details/:movieId/edit', async (req, res) => {
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

    const formData = req.body;
    
    await updateMovie(movieId, formData);
    res.redirect(`/details/${movieId}/`);
});


export default editMovieController;