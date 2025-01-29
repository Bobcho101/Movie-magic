import { Router } from "express";
const registerController = Router();

registerController.get('/auth/register', (req, res) => {
    res.render('auth/register');
});

export default registerController;