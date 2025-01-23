import { Router } from 'express';
import homeController from './controller/home-controller.js';
import aboutController from './controller/about-controller.js';
import createMovieController from './controller/create-movie-controller.js';
import detailsController from './controller/details-controller.js';
import searchController from './controller/searchController.js';
import createCastController from './controller/create-cast-controller.js';

const routes = Router();

routes.use(homeController);
routes.use(aboutController);
routes.use(createMovieController);
routes.use(detailsController);
routes.use(searchController);
routes.use(createCastController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;