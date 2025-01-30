import { Router } from "express";
import { login } from "../services/auth-services.js";
const loginController = Router();

loginController.get('/auth/login', (req, res) => {
    res.render('auth/login');
});

loginController.post('/auth/login', async (req, res) => {
    const data = req.body;

    try{
        const token = await login(data.email, data.password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch(err){
        console.log(err.message); 
        res.redirect('/404');
    }
   
});

export default loginController;