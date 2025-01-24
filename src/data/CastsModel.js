import mongoose, { Schema, model } from "mongoose";

const castSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: String,
    imageUrl: String,
    rating: Number,
    description: String,
});

const Cast = model('Cast', castSchema);

export default Cast;
