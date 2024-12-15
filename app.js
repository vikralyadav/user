const dotenv = require('dotenv');
dotenv.config();

const connect = require('./db/db'); // Ensure correct import syntax
connect();


const express = require('express');
const app = express();

const userRoutes=require('./routes/user.routes')
const cookieParser= require('cookie-parser');

app.use(express.json())
app.use(cookieParser)
app.use(express.urlencoded({ extended: true}))



app.use('/user', userRoutes)

module.exports = app;