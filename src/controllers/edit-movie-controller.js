import { Router } from "express";
import { ObjectId } from "mongodb";
import { getCategories, getOne, updateMovie } from "../services/movie-services.js";
import {isUser} from "../middlewares/auth-middleware.js";
const editMovieController = Router();

editMovieController.get('/details/:movieId/edit', isUser, async (req, res) => {

    const userId = req.user.id;
    const movieId = req.params.movieId;
    const currentMovie = await getOne(movieId);
    const currentMovieCreatorId = currentMovie.creator;


    if(currentMovieCreatorId.toString() != userId || userId == undefined){
        return res.redirect('/404');
    }

    const movie = currentMovie;
    const categories = getCategories(movie.category);

    
    res.render('movie/movie-edit', { movie, categories });
});

editMovieController.post('/details/:movieId/edit', async (req, res) => {
    const formData = req.body;
    const movieId = req.params.movieId;
    try{
        await updateMovie(movieId, formData);
        res.redirect(`/details/${movieId}/`);
    } catch(err){
        console.log(err.message);
        return res.redirect(`/details/${movieId}/edit`);
    }       
   
});


export default editMovieController;