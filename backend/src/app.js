//database
//require('./config/db');

require('dotenv').config();
const express = require('express')
const app = require('express')();
const cors = require('cors');
const bodyParser = require('express').json;
const urlenclosed = require('express').urlencoded;
const homeRoute = require('./domains/home/routes')
const policyRoute = require('./domains/policy/routes')
const userRoute = require('./domains/user/routes')
const claimsRouter = require("./domains/claims/routes");
const passport = require('passport');
require("./config/authenticate")



// Handle JSON payload
app.use(express.json());
//CORS
app.use(cors());
//Accept POST form data
app.use(bodyParser());
app.use(urlenclosed({ extended: false }));

//Register Routes

app.use("/api/v1/policy", passport.authenticate('jwt', { session: false }),policyRoute)
app.use("/api/v1/home", homeRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/claim", passport.authenticate('jwt', { session: false }), claimsRouter);
//Display that express server is running at root path
app.get('/', (req, res) => {
    res.send('Express Server Running')
});

module.exports = app;
