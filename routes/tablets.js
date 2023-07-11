const express = require('express')
const router = express.Router();

const tabletsController = require('../config/controllers/tabletsController')

router.get('/', tabletsController.index)

module.exports = router;