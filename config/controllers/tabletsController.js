
class TabletsController{

    index(req, res){
        res.render('tablets', {title:'Tablets'})
    }


}

module.exports = new TabletsController;