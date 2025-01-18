import { Router } from 'express';
import movies from '../data/movies.js';
import { v4 as uuidv4 } from 'uuid';


const createController = Router();

createController.get('/create', (req, res) => {
    res.render('create')
});

createController.post('/create', (req, res) => {
    const formData = req.body;
    const id = uuidv4();
    console.log(id);
    
    formData['id'] = id;
    movies.push(formData);
    res.redirect('/');
});

export default createController;