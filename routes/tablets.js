const express = require('express')
const router = express.Router();

const indexController = require('../config/controllers/indexController')
const tabletsController = require('../config/controllers/tabletsController')

router.get('/',indexController.checklogin, tabletsController.index)

module.exports = router;