import { Router } from "express";
import { getOne } from "../services/movie-services.js";

const detailsController = Router();

detailsController.get('/details/:movieId', async (req, res) => {
    const currentId = req.params.movieId;
    const currentMovie = await getOne(currentId);

    const rating = Math.floor(currentMovie.rating);

  
    let stars = "";
    for(let i = 0; i < rating; i++){
        stars += "★";
    }

    console.log(currentMovie);
    console.log(stars);
    
    
    res.render('details', { currentMovie, stars });
});

export default detailsController;