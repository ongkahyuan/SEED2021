const {Router} = require('express')

const router = Router();
const controller = require('./controller')


router.get('/policybyid',controller.getAllPolicyByEmployeeID);

module.exports = router;