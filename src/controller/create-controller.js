import { Router } from 'express';

const createController = Router();

createController.get('/create', (req, res) => {
    res.render('create')
});


export default createController;