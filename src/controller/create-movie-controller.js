import { Router } from 'express';
import Movie from '../models/MoviesModel.js';

const createMovieController = Router();

createMovieController.get('/create-movie', (req, res) => {
    res.render('create/movie-create');
});

createMovieController.post('/create-movie', (req, res) => {
    const formData = req.body;
    Movie.create(formData);
    res.redirect('/');
});

export default createMovieController;