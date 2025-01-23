import { Router } from 'express';
import movies from '../data/movies.js';
import { v4 as uuidv4 } from 'uuid';


const createMovieController = Router();

createMovieController.get('/create-movie', (req, res) => {
    res.render('create');
});

createMovieController.post('/create-movie', (req, res) => {
    const formData = req.body;
    const id = uuidv4();
    
    formData['id'] = id;
    movies.push(formData);
    res.redirect('/');
});

export default createMovieController;