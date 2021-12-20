class VendorController {
    //[GET] manage product /vendor
    ManageProduct(req, res) {
        res.render('vendor/manageproduct');
    }

}

module.exports = new VendorController;