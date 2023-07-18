const express = require('express')
const router = express.Router();

const indexController = require('../config/controllers/indexController')
const mobilesController = require('../config/controllers/mobilesController')

router.get('/',indexController.checklogin, mobilesController.index)

router.get('/soft/:softmethod',indexController.checklogin, mobilesController.soft)



module.exports = router;