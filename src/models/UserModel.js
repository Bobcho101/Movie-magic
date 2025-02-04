import mongoose, { Schema, model, Types } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    email: {
        type: String,
        required: true, 
        minlength: 10,
        unique: true,
        lowercase: true, 
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
    },
    password: {
        type: String,
        required: true,
        match: /^\w+$/,
        minLength: [6, 'Password should be at least 6 characters!'],
        trim: true,
    }
});

userSchema.pre('save', async function () {
   this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;