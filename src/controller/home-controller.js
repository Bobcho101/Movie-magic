import { Router } from 'express';
import { getAllFilteredMovies } from '../services/movie-services.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await getAllFilteredMovies();
    console.log(movies);
    
    res.render('home', { movies });
});



export default homeController;