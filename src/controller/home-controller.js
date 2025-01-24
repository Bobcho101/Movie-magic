import { Router } from 'express';
import { getAllFilteredMovies } from '../services/movie-services.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await getAllFilteredMovies();
    
    res.render('movie/home', { movies });
});



export default homeController;