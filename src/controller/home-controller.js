import { Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('home')
});
router.get('/about', (req, res) => {
    res.render('about')
});
router.get('/create', (req, res) => {
    res.render('create')
});

export default router;