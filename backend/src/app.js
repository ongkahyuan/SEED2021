//database
//require('./config/db');
require('dotenv').config();
const express = require('express')
const app = require('express')();
const cors = require('cors');
const bodyParser = require('express').json;
const homeRoute = require('./domains/home/routes')

// Handle JSON payload
app.use(express.json());
//CORS
app.use(cors());
//Accept POST form data
app.use(bodyParser());



//Register Routes
app.use("/api/v1/home",homeRoute);

//Display that express server is running at root path
app.get('/',(req,res)=> {
    res.send('Express Server Running')
});

module.exports = app;