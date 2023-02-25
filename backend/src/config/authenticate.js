// import passport from "passport"
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const jwtStrategy = require("passport-jwt")
const controller = require('../domains/home/controller')
const bcrypt = require('bcrypt')

// Passport Strategies

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'EmployeeID',
            passwordField: 'password'
        },
        async (EmployeeID, password, done) => {
            try {
                // find a user based on the employeeID
                // validate the user based on bcrypt
                // if validate, return a user object

            } catch (error) {
                console.log(error)
                return done(error)
            }
        }
    )
)

passport.use(
    new jwtStrategy.Strategy(
        {
            secretOrKey: "secret",
            jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
            // find user by ID
            try {
                // if user is valid, return the user object
                done(null, user)
            } catch (error) { done(error) }
        }
    )
)