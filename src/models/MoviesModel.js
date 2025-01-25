import mongoose, { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
        min: [1980, 'Too old!'],
        max: [2026, 'Cannot be set in the future!']
    },
    imageUrl: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: [0, 'Cannot be less than 0!'],
        max: [10, 'The rating cannot be more than 10!']
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }]
});

const Movie = model('Movie', movieSchema);

export default Movie;
