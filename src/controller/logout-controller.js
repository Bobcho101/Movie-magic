import { Router } from "express";
const logoutController = Router();

logoutController.get('/auth/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
}); 

export default logoutController;