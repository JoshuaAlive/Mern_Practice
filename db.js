// Connection to MongoDB file.
const mongoose = require('mongoose'); // Common js by default
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGODBATLAS_URI);
    console.log('MongoDB connected successfully');
}

module.exports = { connectDB, mongoose };