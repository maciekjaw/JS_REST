const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');

//Middlewares
app.use('/postpage', () => {

    console.log("This is a middleware for /postpage")
});

//ROUTES
app.get('/', (req, res) => {

    res.send('We are home');
});

app.get('/postpage', (req, res) => {

    res.send('We are on post page');
});

//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected to DB"));
app.listen(3000);