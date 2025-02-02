import { Router } from "express";
import Movie from "../models/MoviesModel.js";
import { attachCast, getCasts } from "../services/cast-services.js";
import { isUser } from "../middlewares/auth-middleware.js";

const attachCastController = Router();

attachCastController.get('/details/:movieId/attach-cast', isUser, async (req, res) => {
    const movie = await Movie.findById(req.params.movieId);
    const movieCreatorId = movie.creator.toString();
    const userId = req.user.id;


    if(userId != movieCreatorId){
        return res.redirect('/404');
    }

   
    const existingCasts = movie.casts;
    const casts = await getCasts(existingCasts);

    res.render('movie/cast-attach', { casts, movie });
});

attachCastController.post('/details/:movieId/attach-cast', async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;
    await attachCast(movieId, castId);
    res.redirect(`/details/${movieId}`);
});

export default attachCastController;