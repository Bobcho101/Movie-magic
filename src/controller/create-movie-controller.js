import { Router } from 'express';
import { createMovie } from '../services/movie-services.js';

const createMovieController = Router();

createMovieController.get('/create-movie', (req, res) => {
    res.render('create/movie-create');
});

createMovieController.post('/create-movie', async (req, res) => {
    const formData = req.body;
    await createMovie(formData);
    res.redirect('/');
});

export default createMovieController;