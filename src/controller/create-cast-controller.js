import { Router } from 'express';

const createCastController = Router();


createCastController.get('/create-cast', (req, res) => {
    res.render('cast-create');
});

export default createCastController;