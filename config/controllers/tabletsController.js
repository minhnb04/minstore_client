const axios = require('axios');

class TabletsController{

    index(req, res){
        axios.get('http://localhost:8080/productCilent/getTablets')
            .then(response => {
                const data = response.data;
                res.render('tablets',{ title: 'Tablets', data: data , userlogin: res.userlogin })
            })
            .catch(error => {
                console.error(error);
            });
    }


}

module.exports = new TabletsController;