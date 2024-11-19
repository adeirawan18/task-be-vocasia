const mongoose = require('mongoose');
const { mongodbUri } = require('./env');

console.log('MongoDB URI from env.js:', mongodbUri);  

const connectDB = async () => {
    try {
        if (!mongodbUri) {
            throw new Error('MongoDB URI is missing!');
        }
        await mongoose.connect(mongodbUri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
