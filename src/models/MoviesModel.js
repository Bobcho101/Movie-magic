import mongoose, { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title should be at least 5 characters long!'],
        maxLength: 250,
        match: [/^[a-zA-Z 0-9]+$/, 'Title should be alphanumeric, digits and whitespaces only!']
    },
    category: {
        type: String,
        required: true,
        enum: [
            'tv-show',
            'animation',
            'movie',
            'documentary',
            'short-film',
        ]
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        maxLength: 250,
        match: [/^[a-zA-Z 0-9]+$/, 'Genre should be alphanumeric, digits and whitespaces only!']
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
        minLength: [5, 'Director should be at least 5 characters long!'],
        maxLength: 250,
        match: [/^[a-zA-Z 0-9]+$/, 'Director should be alphanumeric, digits and whitespaces only!']
    },
    year: {
        type: String,
        required: true,
        min: [1900, 'Too old!'],
        max: [2025, 'Cannot be set in the future!']
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    rating: {
        type: Number,
        required: true,
        default: 1,
        min: [1, 'Cannot be less than 0!'],
        max: [10, 'The rating cannot be more than 10!']
    },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must be at least 20 characters long'],
    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;
