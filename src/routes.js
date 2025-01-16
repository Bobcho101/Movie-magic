import { Router } from 'express';
import homeController from './controller/home-controller.js';

const routes = Router();

routes.use(homeController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;