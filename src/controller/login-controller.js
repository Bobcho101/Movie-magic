import { Router } from "express";
const loginController = Router();

loginController.get('/auth/login', (req, res) => {
    res.send('auth/login');
});

export default loginController;