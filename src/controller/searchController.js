import { Router } from "express";
const searchController = Router();

searchController.get('/search', (req, res) => {
    res.render('search');
});

export default searchController;