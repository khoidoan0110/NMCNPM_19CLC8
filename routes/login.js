const express=require('express');
const router=express.Router();
const LoginController = require('../Controller/LoginController');

//sign up
router.get('/signup', LoginController.signupPage);
router.post('/signup', LoginController.register);

// //verify after resgister
// router.get('/verify/:emailToken', loginController.activeNewAccount)
// router.get('/verify', loginController.verifyPage);

//forget password
// router.get('/forget', loginController.forgetPasswordPage)
// router.post('/forget', loginController.sendNewPassword);

router.get('/', LoginController.loginPage);
router.post('/', LoginController.authenticate);

module.exports = router;