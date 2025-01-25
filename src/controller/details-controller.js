import { Router } from "express";
import { getOne } from "../services/movie-services.js";
import { getCastsForRender } from "../services/cast-services.js";

const detailsController = Router();

detailsController.get('/details/:movieId', async (req, res) => {
    const currentId = req.params.movieId;
    const currentMovie = await getOne(currentId);
    const currentMovieCastsIds = currentMovie.casts;
    const casts = await getCastsForRender(currentMovieCastsIds);

    
    const rating = Math.floor(currentMovie.rating);

  
    let stars = "";
    for(let i = 0; i < rating; i++){
        stars += "★";
    }

    
    res.render('movie/movie-details', { currentMovie, stars, casts});
});

export default detailsController;