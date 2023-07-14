const express = require('express')
const router = express.Router();


const mobilesController = require('../config/controllers/mobilesController')

router.get('/', mobilesController.index)

router.get('/soft/:softmethod', mobilesController.soft)



module.exports = router;