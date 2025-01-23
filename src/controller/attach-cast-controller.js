import { Router } from "express";

const attachCastController = Router();

attachCastController.get('/details/:movieId/attach-cast', (req, res) => {
    res.render('cast-attach');
});

export default attachCastController;