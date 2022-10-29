import { Schema, model } from 'mongoose';

const Movie = new Schema({
    title: String,
    description: String,
    director: String,
    producer: String,
}, { collection: 'movies' });

export default model('Movie', Movie);
