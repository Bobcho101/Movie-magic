import { Router } from "express";
import { register } from "../services/auth-services.js";
const registerController = Router();

registerController.get('/auth/register', (req, res) => {
    res.render('auth/register');
});

registerController.post('/auth/register', async (req, res) => {
    const data = req.body;
    
    const newUser = await register(req.body.email, req.body.password, req.body['re-pass']);
    res.end();
});

export default registerController;