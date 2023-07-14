
const axios = require('axios');
class MobilesController{

    index(req, res){
        axios.get('https://minstore-admin.onrender.com/products/getProducts')
            .then(response => {
                // Nhận dữ liệu JSON từ phản hồi
                const data = response.data;
                console.log(data);
                res.render('mobiles',{ title: 'Mobiles', data: data })
            })
            .catch(error => {
                console.error(error);
            });
    }

    soft(req, res, next) {
        axios.get('https://minstore-admin.onrender.com/products/getProducts')
            .then(response => {
                // Nhận dữ liệu JSON từ phản hồi
                const data = response.data;

                if (req.params.softmethod == 'outstanding') {

                    res.render('mobiles', {title: 'Mobiles', data: data})
                } else if (req.params.softmethod == 'pricehightolow') {
                    data.sort((a, b) => b.price - a.price);
                    res.render('mobiles', {title: 'Mobiles', data: data})
                } else if (req.params.softmethod == 'pricelowtohigh') {
                    data.sort((a, b) => a.price - b.price);
                    res.render('mobiles', {title: 'Mobiles', data: data})
                } else if (req.params.softmethod == 'alphabet') {
                    data.sort((a, b) => a.productName.localeCompare(b.productName));
                    res.render('mobiles', {title: 'Mobiles', data: data})
                } else {
                    res.json('softmethod sai!!!')
                }

            })
            .catch(error => {
                res.render('error', {title: 'Error', error: error})
            });

    }
}

module.exports = new MobilesController;