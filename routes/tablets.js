const express = require('express')
const router = express.Router();

const indexController = require('../config/controllers/indexController')
const tabletsController = require('../config/controllers/tabletsController')

router.get('/',indexController.checklogin, tabletsController.index)

router.get('/soft/:softmethod',indexController.checklogin, tabletsController.soft)

module.exports = router;