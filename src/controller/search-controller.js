import { Router } from "express";
import { getAllFilteredMovies } from "../services/movie-services.js";

const searchController = Router();

searchController.get('/search',async (req, res) => {
    const filter = req.query;
    // const movies = getAllFilteredMovies(filter);
    const movies = await getAllFilteredMovies(filter);


    res.render('search', { movies, filter });
});

export default searchController;