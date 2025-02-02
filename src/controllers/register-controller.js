import { Router } from "express";
import { register } from "../services/auth-services.js";
import { isAlreadyUser } from "../middlewares/auth-middleware.js";
const registerController = Router();

registerController.get('/auth/register', isAlreadyUser, (req, res) => {
    res.render('auth/register');
});

registerController.post('/auth/register', async (req, res) => {
    const data = req.body;
    
    try{
        const token = await register(req.body.email, req.body.password, req.body['re-pass']);
        res.cookie('auth', token);
        res.redirect('/');
    } catch(err){   
        console.log(err.message);
        res.render('404');
    }
});

export default registerController;