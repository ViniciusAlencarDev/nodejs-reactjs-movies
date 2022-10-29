import mongoose from 'mongoose';
import Dotenv from 'dotenv';
Dotenv.config();

const connection = mongoose.connect(process.env.BASE_URL_MONGODB || '');

export default connection;
