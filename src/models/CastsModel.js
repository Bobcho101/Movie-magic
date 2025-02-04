import mongoose, { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [5, 'Name should be at least 5 characters long!'],
        match: [/^[a-zA-Z 0-9]+$/, 'Name should be alphanumeric, digits and whitespaces only!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Cannot be less than 0!'],
        max: [120, "Max age is 120!"]
    },
    born: {
        type: String,
        required: [true, 'Born location is required!'],
        minLength: 10,
        match: /^[a-zA-Z 0-9]+$/,
    },
    nameInMovie: {
        type: String,
        required: [true, 'Name in movie is required!']
    },
    castImage: {
        type: String,
        required: [true, 'Cast image is required!'],
        match: /^https?:\/\//,
    }
});

const Cast = model('Cast', castSchema);

export default Cast;
