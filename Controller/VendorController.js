class VendorController {
    //[GET] manage product /vendor
    ManageProduct(req, res) {
        res.render('vendor/manageproduct');
    }
    CreateProduct(req, res) {
        res.render('vendor/createproduct');
    }
    VendorApplied(req,res){
        res.render('vendor/vendorapplied');

    }
}

module.exports = new VendorController;