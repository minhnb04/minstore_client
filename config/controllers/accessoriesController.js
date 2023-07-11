
class AccessoriesController{

    index(req, res){
        res.render('accessories', {title:'Accessories'})
    }


}

module.exports = new AccessoriesController;