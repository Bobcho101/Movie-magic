import { Router } from "express";
import movies from "../data/movies.js";
import { getAllFilteredMovies } from "../services/movie-services.js";

const searchController = Router();

searchController.get('/search', (req, res) => {
    const filter = req.query;
    const movies = getAllFilteredMovies(filter);
    res.render('search', { movies, filter });
});

export default searchController;