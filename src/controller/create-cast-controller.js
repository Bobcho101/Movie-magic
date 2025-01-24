import { Router } from 'express';
import Cast from '../models/CastsModel.js';
import { createCast } from '../services/cast-services.js';

const createCastController = Router();


createCastController.get('/create-cast', (req, res) => {
    res.render('create/cast-create');
});
createCastController.post('/create-cast', (req, res) => {
    const formData = req.body;

    createCast(formData);
    res.redirect('/');
});

export default createCastController;