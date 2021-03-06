const express=require('express');
const router=express.Router();
const UserController = require('../Controller/UserController');

//change password
router.get('/changepassword', UserController.changePassword);
router.post('/changepassword/:id', UserController.storeNewPass);

router.get('/order', UserController.OrderPage);

router.get('/cart', UserController.Cart);

router.get('/logout', UserController.logOut);

//update information
router.post('/:id', UserController.storeUpdateInformation);
router.get('/information', UserController.InformationPage);

//apply for vendor
router.get('/applyforvendor/:id',UserController.applyForVendor);

router.delete('/cart/:id', UserController.deleteCart);

router.put('/cart/:id', UserController.updateCart);

router.post('/cart/:id', UserController.addCart);

router.get('/checkout',UserController.CheckoutPage);

router.put('/checkout/applyvoucher/:id',UserController.applyVoucher);

router.post('/checkout/:id',UserController.checkOut);

router.delete('/order/:id',UserController.cancelOrder);
module.exports = router;