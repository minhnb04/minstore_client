const axios = require('axios');

class AccessoriesController{

    index(req, res){
        axios.get('http://localhost:8080/productCilent/getAccessories')
            .then(response => {
                const data = response.data;
                res.render('accessories',{ title: 'Accessories', data: data , userlogin: res.userlogin })
            })
            .catch(error => {
                console.error(error);
            });
    }


}

module.exports = new AccessoriesController;