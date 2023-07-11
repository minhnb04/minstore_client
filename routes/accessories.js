const express = require('express')
const router = express.Router();

const accessoriesController = require('../config/controllers/accessoriesController')

router.get('/', accessoriesController.index)

module.exports = router;