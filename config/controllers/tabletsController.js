const axios = require('axios');

class TabletsController{

    index(req, res){
        axios.get('https://minstore-admin.onrender.com/productCilent/getTablets')
            .then(response => {
                const data = response.data;
                res.render('tablets',{ title: 'Tablets', data: data , userlogin: res.userlogin })
            })
            .catch(error => {
                console.error(error);
            });
    }

    soft(req, res, next) {
        axios.get('https://minstore-admin.onrender.com/productCilent/getTablets')
            .then(response => {
                const data = response.data;
                if (req.params.softmethod == 'outstanding') {
                    res.render('tablets', {title: 'Tablets', data: data, userlogin: res.userlogin})
                } else if (req.params.softmethod == 'pricehightolow') {
                    data.sort((a, b) => b.price - a.price);
                    res.render('tablets', {title: 'Tablets', data: data, userlogin: res.userlogin})
                } else if (req.params.softmethod == 'pricelowtohigh') {
                    data.sort((a, b) => a.price - b.price);
                    res.render('tablets', {title: 'Tablets', data: data, userlogin: res.userlogin})
                } else if (req.params.softmethod == 'alphabet') {
                    data.sort((a, b) => a.productName.localeCompare(b.productName));
                    res.render('tablets', {title: 'Tablets', data: data, userlogin: res.userlogin})
                } else {
                    res.json('softmethod sai!!!')
                }
            })
            .catch(error => {
                res.render('error', {title: 'Error', error: error})
            });
    }


}

module.exports = new TabletsController;