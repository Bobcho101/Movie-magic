import { Router } from "express";
import { isUser } from "../middlewares/auth-middleware.js";
const logoutController = Router();

logoutController.get('/auth/logout', isUser, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
}); 

export default logoutController;