const mongoose = require('mongoose');
require('dotenv').config();

// Define the connection string correctly without extra spaces
//const monogURL = process.env.MONGODB_URL_LOCAL;



// dotenv 
const monogURL = process.env.MONGODB_URL;


// Connect to MongoDB using mongoose
mongoose.connect(monogURL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Export mongoose for use in other parts of the application
module.exports = mongoose;
