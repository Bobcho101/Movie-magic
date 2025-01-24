import mongoose, { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Cannot be less than 0!'],
        max: [100, "That's too old!"]
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovie: {
        type: String,
        required: true
    },
    castImage: {
        type: String,
        required: true
    }
});

const Cast = model('Cast', castSchema);

export default Cast;
