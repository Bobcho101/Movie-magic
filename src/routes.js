import { Router } from 'express';
import homeController from './controller/home-controller.js';
import aboutController from './controller/about-controller.js';
import createController from './controller/create-controller.js';
import detailsController from './controller/details-controller.js';

const routes = Router();

routes.use(homeController);
routes.use(aboutController);
routes.use(createController);
routes.use(detailsController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;