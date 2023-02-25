const { Router } = require('express')
const passport = require('passport')
const jwt = require("jsonwebtoken")
require('../../config/authenticate')

const router = Router();

router.post('/login',
    async (req, res, next) => {
        console.log("at the route: ", req.body)
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error("An error occurred");
                        console.log(info);
                        return next(error);
                    }
                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);
                            const userBody = {
                                "EmployeeID": user[0].EmployeeID,
                                "FirstName": user[0].FirstName,
                                "LastName": user[0].LastName,
                                "Age": user[0].Age
                            }
                            console.log("User Body", userBody)
                            const token = jwt.sign(userBody, "secret") //TODO:  replace this with the env secret
                            return res.json({ token })
                        }
                    )
                } catch (error) {
                    console.log(error)
                    return next(error)
                }
            }
        )(req, res, next)
    }
)

module.exports = router