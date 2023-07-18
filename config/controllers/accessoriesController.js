const axios = require('axios');

class AccessoriesController{

    index(req, res){
        axios.get('https://minstore-admin.onrender.com/productCilent/getAccessories')
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