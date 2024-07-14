const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'

const ConnectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log('Connected successfully to MongoDB');
        })
        .catch((err) => {
            console.error('Failed to connect to MongoDB', err);
        });
};

module.exports = ConnectToMongo;
