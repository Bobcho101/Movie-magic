import { Router } from "express";
import Cast from "../models/CastsModel.js";
import Movie from "../models/MoviesModel.js";

const attachCastController = Router();

attachCastController.get('/details/:movieId/attach-cast', async (req, res) => {
    const casts = await Cast.find({});
    const movie = await Movie.findById(req.params.movieId);
   
    
    res.render('movie/cast-attach', { casts, movie });
});

export default attachCastController;