const express = require('express');
const router = express.Router();

const homeController = require('../config/controllers/homeController')

/* GET home page. */
router.get('/', homeController.index)


 
module.exports = router;
