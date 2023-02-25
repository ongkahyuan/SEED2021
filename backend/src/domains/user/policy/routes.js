const {Router} = require('express')

const router = Router();
const controller = require('./controller')

router.get('/',controller.getHome);
router.get('/users',controller.getAllUsers);


module.exports = router;