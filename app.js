const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/posts');

//Middlewares
app.use('/posts', postRoute);
app.use('/specific', postRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('We are home');
});


//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB"));
app.listen(3000);