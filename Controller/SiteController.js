class SiteController{

    AboutPage(req,res){
        res.render('about');
    }

    HomePage(req,res){
        res.render('index');
    }

    Product(req,res){
        res.render('product');
    }
}

module.exports=new SiteController;