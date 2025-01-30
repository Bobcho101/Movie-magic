import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';

export function register(email, password, rePass) {
    if(password != rePass){
        throw new Error('Password missmatched!');
    }
    return User.create({ email, password });
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
    

}