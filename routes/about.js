const express = require('express');
const router = express.Router();

const aboutController = require('../config/controllers/aboutController')

/* GET home page. */
router.get('/', aboutController.index)



module.exports = router;