
class LoginController {
    //[GET] login page /login
    loginPage(req, res) {
        res.render('login/login');
    }

    //[GET] signup page /signup
    signupPage(req, res) {
        res.render('login/signup' );
    }
}

module.exports = new LoginController;