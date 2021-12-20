const express = require('express');
const router = express.Router();
const VendorController = require('../Controller/VendorController');

router.get('/manageproduct', VendorController.ManageProduct);


module.exports = router;