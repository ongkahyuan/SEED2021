const {Router} = require('express')

const router = Router();
const controller = require('./controller')


router.get('/policybyemployeeid',controller.getAllPolicyByEmployeeID);
router.get('/id',controller.getAllPolicyByPolicyID);

module.exports = router;