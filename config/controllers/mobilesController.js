
class MobilesController{

    index(req, res){
        res.render('mobiles',{ title: 'Mobiles' })
    }

}

module.exports = new MobilesController;