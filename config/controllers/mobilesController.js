
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

}

module.exports = new MobilesController;