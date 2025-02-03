import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = '10$01ad231sx23DRDadpjtC/m5Rwd3uY75fwadw';

export async function register(email, password, rePass) {
    if(password != rePass){
        throw new Error('Password missmatched!');
    }
    const userExists = await User.findOne({email});
    if(userExists){
        throw new Error("This user already exists!");
    }   
    const user = User.create({ email, password });
    const payload = {
        id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: '3h'});

    return token;
}

export async function login(email, password){
    const user = await User.findOne({ email });
    if(!user){
        throw new Error('Invalid user!');
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if(!isValid){
        throw new Error("Wrong password!");
    }
    
    const payload = {
        id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: '3h'});
    
    return token;
}
