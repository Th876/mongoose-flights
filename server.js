// require express
const express = require('express');

// require database
const Database = require('./models/flights.js');

// set express() to a variable
const app = express();

// set variable port to 3000
const port = 3000;

// require mongoose
const mongoose = require('mongoose');

// add dotenv
require('dotenv').config();

// mongoose info
const launchMongoose = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
    });

// Server listening

app.listen(port, () => {
    console.log(`listening on port ${port}`);
}); 
} catch (err) {
    console.log(err.message);
}
};

launchMongoose();





