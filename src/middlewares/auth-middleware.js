import jwt from 'jsonwebtoken';
const SECRET = '10$01ad231sx23DRDadpjtC/m5Rwd3uY75fwadw';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies['auth'];
    if(!token){
        return next();
    }

    try{
        const decodedToken = jwt.verify(token, SECRET);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        
        next();
    } catch(err){
        console.log(err.message);
        res.clearCookie('auth');
        res.render('404');
    }
}

export async function isUser(req, res, next) {
    if(!req.user){
        return res.redirect('/auth/login');
    } 
    
    next();
}

export async function isAlreadyUser(req, res, next) {
    if(req.user){
        return res.redirect('/');
    }
    next();
}