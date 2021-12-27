class VendorController {
    //[GET] manage product /vendor
    ManageProduct(req, res) {
        res.render('vendor/manageproduct');
    }
    CreateProduct(req, res) {
        res.render('vendor/createproduct');
    }
}

module.exports = new VendorController;