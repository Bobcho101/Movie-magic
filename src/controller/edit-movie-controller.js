import { Router } from "express";
import { ObjectId } from "mongodb";
import { getCategories, getOne, updateMovie } from "../services/movie-services.js";
const editMovieController = Router();

editMovieController.get('/details/:movieId/edit', async (req, res) => {
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
export default editMovieController;