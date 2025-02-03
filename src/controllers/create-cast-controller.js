import { Router } from 'express';
import Cast from '../models/CastsModel.js';
import { createCast } from '../services/cast-services.js';
import {isUser} from '../middlewares/auth-middleware.js';

const createCastController = Router();

createCastController.get('/create-cast', isUser, (req, res) => {
    res.render('create/cast-create');
});
createCastController.post('/create-cast', async (req, res) => {
    const formData = req.body;
    try{
        await createCast(formData);
        res.redirect('/');
    } catch(err){
        console.log(err.message);
        res.redirect('/404');
    }
    
});

export default createCastController;