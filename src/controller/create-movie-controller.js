import { Router } from 'express';
import Movie from '../models/MoviesModel.js';
import { createMovie } from '../services/movie-services.js';

const createMovieController = Router();

createMovieController.get('/create-movie', (req, res) => {
    res.render('create/movie-create');
});

createMovieController.post('/create-movie', (req, res) => {
    const formData = req.body;
    createMovie(formData);
    res.redirect('/');
});

export default createMovieController;