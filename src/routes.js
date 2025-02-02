import { Router } from 'express';
import homeController from './controllers/home-controller.js';
import aboutController from './controllers/about-controller.js';
import createMovieController from './controllers/create-movie-controller.js';
import detailsController from './controllers/details-controller.js';
import searchController from './controllers/search-controller.js';
import createCastController from './controllers/create-cast-controller.js';
import attachCastController from './controllers/attach-cast-controller.js';
import registerController from './controllers/register-controller.js';
import loginController from './controllers/login-controller.js';
import logoutController from './controllers/logout-controller.js';
import editMovieController from './controllers/edit-movie-controller.js';
import deleteMovieController from './controllers/delete-movie-controller.js';

const routes = Router();

routes.use(homeController);
routes.use(aboutController);
routes.use(createMovieController);
routes.use(detailsController);
routes.use(searchController);
routes.use(createCastController);
routes.use(attachCastController);
routes.use(registerController);
routes.use(loginController);
routes.use(logoutController);
routes.use(editMovieController);
routes.use(deleteMovieController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;