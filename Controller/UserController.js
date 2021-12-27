const userService = require('../services/userService.js');

class UserController {
    //[GET] infomation page /user
    InformationPage(req, res) {
        res.render('user/information');
    }

    //[GET] order page /order
    OrderPage(req, res) {
        res.render('user/order' );
    }

    logOut(req, res) {
        req.logout();
        res.redirect('/');
    }

    async storeUpdateInformation(req, res) {
        const valid = await userService.updateInfo(req.params.id, req.body);
        if (valid) {
            const customer = await userService.getCustomer(req.params.id);
            req.session.passport.user = customer;
            req.session.message = "ok";
            req.session.save(function (err) {
                console.log(err);
                res.render('user/information', { newinfo: customer });
            })

        } else {
            req.session.save(function (err) { console.log(err); })
            res.render('user/information', { error: "duplicate email" });
        }
    }
    
    async applyForVendor(req,res){
        const valid = await userService.applyForVendor(req.params.id);
        if (valid) {
            const customer = await userService.getCustomer(req.params.id);
            console.log(customer.role);
            req.session.passport.user = customer;
            req.session.message = "ok";
            req.session.save(function (err) {
                console.log(err);
                res.redirect('/vendor/vendorapplied');
            })

        } else {
            req.session.save(function (err) { console.log(err); })
        }
    }
}

module.exports = new UserController;