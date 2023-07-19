const express = require('express');
const router = express.Router();

const indexController = require('../config/controllers/indexController')

/* GET home page. */
router.get('/',indexController.checklogin, indexController.index)

router.get('/showlogin', indexController.showlogin)

router.post('/login', indexController.login)

router.get('/checklogin', indexController.checklogin)

router.get('/logout', indexController.logout)


 
module.exports = router;
