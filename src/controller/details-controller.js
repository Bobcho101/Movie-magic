import { Router } from "express";
import { getOne } from "../data/db-methods.js";

const detailsController = Router();

detailsController.get('/details/:movieId', (req, res) => {
    const currentId = req.params.movieId;
    const currentMovie = getOne(currentId);
    console.log(currentMovie);
    
    res.render('details', {currentMovie});
});

export default detailsController;