import { Router } from "express";
import movies from "../data/movies.js";
import { getAllFilteredMovies } from "../data/db-methods.js";

const searchController = Router();

searchController.get('/search', (req, res) => {
    console.log(req.query);
    const filter = req.query;
    const movies = getAllFilteredMovies(filter);
    res.render('search', { movies });
});

export default searchController;