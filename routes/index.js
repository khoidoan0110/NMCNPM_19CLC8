const SiteRouter = require('../routes/site');
const loginRouter = require('../routes/login');
const UserRouter = require('../routes/user');
const VendorRouter = require('../routes/vendor');
const ProductRouter=require('../routes/product');
const AdminRouter = require('../routes/admin');
const loginGaurd = require('../utils/loginguard');
const createError = require('http-errors');

function route(app) {
    app.use('/', SiteRouter);

    app.use('/login',loginGaurd.LoginedGuard, loginRouter);

    app.use('/user', loginGaurd.LoginGuard,UserRouter);

    app.use('/vendor',loginGaurd.LoginGuard, VendorRouter);

    app.use('/product', ProductRouter);

    app.use('/admin', AdminRouter);

    //catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}
module.exports = route;