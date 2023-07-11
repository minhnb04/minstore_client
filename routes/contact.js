const express = require('express');
const router = express.Router();

const contactController = require('../config/controllers/contactController')

/* GET home page. */
router.get('/', contactController.index)



module.exports = router;