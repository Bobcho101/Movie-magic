import { Router } from "express";
import Cast from "../models/CastsModel.js";
import Movie from "../models/MoviesModel.js";
import { getCasts } from "../services/cast-services.js";

const attachCastController = Router();

attachCastController.get('/details/:movieId/attach-cast', async (req, res) => {
    const movie = await Movie.findById(req.params.movieId);
    const casts = await getCasts();
   
    
    res.render('movie/cast-attach', { casts, movie });
});

export default attachCastController;