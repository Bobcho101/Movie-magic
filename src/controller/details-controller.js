import { Router } from "express";
import { getOne } from "../data/db-methods.js";

const detailsController = Router();

detailsController.get('/details/:movieId', (req, res) => {
    const currentId = req.params.movieId;
    const currentMovie = getOne(currentId);
    const currentMovieCopy = Object.assign({}, currentMovie);
    
    currentMovieCopy['rating'] = Math.floor(currentMovieCopy.rating);
  
    let stars = "";
    for(let i = 0; i < currentMovieCopy.rating; i++){
        stars += "★";
    }
    currentMovieCopy['rating'] = stars;

    res.render('details', { currentMovieCopy });
});

export default detailsController;