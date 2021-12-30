class VendorController {
    //[GET] manage product /vendor
    ManageProduct(req, res) {
        res.render('vendor/manageproduct');
    }
    Voucher(req, res){
        res.render('vendor/voucher')
    }
}

module.exports = new VendorController;