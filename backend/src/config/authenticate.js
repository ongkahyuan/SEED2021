// import passport from "passport"
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const jwtStrategy = require("passport-jwt")
const controller = require('../domains/home/controller')
const model = require("../domains/user/model")
const bcrypt = require('bcrypt')

// Passport Strategies

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'EmployeeID',
            passwordField: 'Password'
        },
        async (username, password, done) => {
            try {
                // find a user based on the employeeID
                const userVerify = await model.getUserByID(username)
                console.log(userVerify[0])
                // validate = bcrypt.compare(password, userVerify.password)
                if (password == userVerify[0].Password) {
                    console.log("Validated: ", userVerify[0].EmployeeID)
                }
                else {
                    console.log("Not validated? ", password, userVerify[0].Password)
                }
                // validate the user based on bcrypt
                // if validate, return a user object
                return done(null, userVerify, { message: "Logged in successfully" })

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