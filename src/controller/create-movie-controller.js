import { Router } from 'express';
import Movie from '../data/MoviesModel.js';

const createMovieController = Router();

createMovieController.get('/create-movie', (req, res) => {
    res.render('create');
});

createMovieController.post('/create-movie', (req, res) => {
    const formData = req.body;
    console.log(formData);
    
    Movie.create(formData);
    res.redirect('/');
});

export default createMovieController;