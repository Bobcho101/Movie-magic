import { Router } from "express";
const loginController = Router();

loginController.get('/auth/login', (req, res) => {
    res.render('auth/login');
});

export default loginController;