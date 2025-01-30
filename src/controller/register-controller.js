import { Router } from "express";
import { register } from "../services/auth-services.js";
const registerController = Router();

registerController.get('/auth/register', (req, res) => {
    res.render('auth/register');
});

registerController.post('/auth/register', (req, res) => {
    const data = req.body;
    
    try{
        const newUser = register(req.body.email, req.body.password, req.body['re-pass']);
        res.redirect('/');
    } catch(err){   
        console.log(err.message);
        res.redirect('/404');
    }
});

export default registerController;