import User from "../models/UserModel.js";

export async function register(email, password, rePass) {
    if(password != rePass){
        throw new Error('Password missmatched!');
    }
  
    
    const newMovie = await User.create({ email, password });
    console.log(newMovie);
    
}