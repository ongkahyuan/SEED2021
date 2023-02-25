// import passport from "passport"
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const jwtStrategy = require("passport-jwt")
const controller = require('../domains/home/controller')
const userModel = require("../domains/user/model")
const policyModel = require("../domains/policy/model")
const claimModel = require("../domains/claims/model")

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
                const userVerify = await userModel.getUserByID(username)
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
            const userVerify = await userModel.getUserByID(token.EmployeeID)
            try {
                if (userVerify) {
                    done(null, userVerify[0])
                }
                else {
                    done("User not verified", null)
                }
                // if user is valid, return the user object
            } catch (error) { done(error) }
        }
    )
)

// User based authentication

async function checkPolicyAuthorisation(policyID, user) {
    const policy = await policyModel.getPoliciesByPolicyID(Number(policyID))
    if (policy[0].EmployeeID == user.EmployeeID) {
        return true
    } return false
}

async function checkClaimAuthorisation(claimID, user) {
    console.log("ClaimID: ", claimID)
    const { claim, fields } = await claimModel.getSpecificClaims(claimID)
    console.log(claim)
    const insuranceID = claim[0].InsuranceID;
    const policy = await policyModel.getPoliciesByPolicyID(policyID)
    if (policy[0].EmployeeID == user.EmployeeID) {
        return true
    } return false
}

module.exports = {
    checkClaimAuthorisation,
    checkPolicyAuthorisation
}