import { Router } from 'express';
import movies from '../data/movies.js';

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', { movies });
});



export default homeController;