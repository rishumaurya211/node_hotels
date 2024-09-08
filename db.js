const mongoose = require('mongoose');

// Define the connection string correctly without extra spaces
const connectionString = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB using mongoose
mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// Export mongoose for use in other parts of the application
module.exports = mongoose;
