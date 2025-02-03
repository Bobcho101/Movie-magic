import { Router } from 'express';
import { createMovie } from '../services/movie-services.js';
import { ObjectId } from 'mongodb';
import {isUser} from '../middlewares/auth-middleware.js';


const createMovieController = Router();

createMovieController.get('/create-movie', isUser, (req, res) => {
    res.render('create/movie-create');
});

createMovieController.post('/create-movie', async (req, res) => {
    const formData = req.body;
    if(req.user !== undefined){
        const userId = req.user.id;
        formData.creator = new ObjectId(userId);
        try{
            await createMovie(formData);
            res.redirect('/');
        } catch(err){
            console.log(err.message);
            res.redirect('/404');
        }
    }
});

export default createMovieController;