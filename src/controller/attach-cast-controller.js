import { Router } from "express";
import Cast from "../models/CastsModel.js";

const attachCastController = Router();

attachCastController.get('/details/:movieId/attach-cast', async (req, res) => {
    const casts = await Cast.find({});
    
    res.render('movie/cast-attach', {casts});
});

export default attachCastController;