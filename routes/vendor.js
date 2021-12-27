const express = require('express');
const router = express.Router();
const VendorController = require('../Controller/VendorController');

router.get('/manageproduct', VendorController.ManageProduct);
router.get('/createproduct', VendorController.CreateProduct);
router.get('/vendorapplied', VendorController.VendorApplied);

module.exports = router;