
class HomeController{

    index(req, res){
        res.render('index', { title: 'MinStore' });
    }


}

module.exports = new HomeController;