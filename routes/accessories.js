const express = require('express')
const router = express.Router();

const indexController = require('../config/controllers/indexController')
const accessoriesController = require('../config/controllers/accessoriesController')

router.get('/',indexController.checklogin, accessoriesController.index)

router.get('/soft/:softmethod',indexController.checklogin, accessoriesController.soft)


module.exports = router;