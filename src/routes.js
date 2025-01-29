import { Router } from 'express';
import homeController from './controller/home-controller.js';
import aboutController from './controller/about-controller.js';
import createMovieController from './controller/create-movie-controller.js';
import detailsController from './controller/details-controller.js';
import searchController from './controller/search-controller.js';
import createCastController from './controller/create-cast-controller.js';
import attachCastController from './controller/attach-cast-controller.js';
import registerController from './controller/register-controller.js';

const routes = Router();

routes.use(homeController);
routes.use(aboutController);
routes.use(createMovieController);
routes.use(detailsController);
routes.use(searchController);
routes.use(createCastController);
routes.use(attachCastController);
routes.use(registerController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;