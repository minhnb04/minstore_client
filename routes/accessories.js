const express = require('express')
const router = express.Router();

const indexController = require('../config/controllers/indexController')
const accessoriesController = require('../config/controllers/accessoriesController')

router.get('/',indexController.checklogin, accessoriesController.index)

module.exports = router;