const express=require('express');
const router=express.Router();
const LoginController = require('../Controller/LoginController');

router.get('/signup', LoginController.signupPage);

router.get('/', LoginController.loginPage);

module.exports = router;