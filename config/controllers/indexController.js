const axios = require('axios');
var jwt = require('jsonwebtoken');

const secretKey = "minhnb04"

class IndexController{

    index(req, res){

        axios.get('http://localhost:8080/productCilent/getProducts')
            .then(response => {
                const data = response.data;
                res.render('index',{ title: 'MinStore', data: data , userlogin: res.userlogin })
            })
            .catch(error => {
                console.error(error);
            });
    }

    showlogin(req, res){
        res.render('login', { title: 'MinStore' });
    }

    async login(req, res, next) {
        const username = req.body.username
        const password = req.body.password

        try {
            const response = await axios.post('http://localhost:8080/authCilent/login', {username, password});
            console.log(response)
            if(response.data.tokenMember){
                const tokenMember = response.data.tokenMember;
                res.cookie('tokenMember', tokenMember, { maxAge: 900000, httpOnly: true });
                return res.redirect('/');
            }
            else if(response.data.error){
                if (response.data.error === 'Incorrect password'){
                    res.json('Incorrect password')
                }
                else if(response.data.error == 'User not found'){
                    res.json('User not found')
                }
                else {
                    res.json('Login failed')
                }
            }

        } catch (error) {
            const errorMessage = error.response ? error.response.data.error : 'Login failed.';
            res.send(errorMessage);
        }
    }

    async checklogin(req, res, next) {
        const tokenMember = req.cookies.tokenMember
        try{
            if(!tokenMember){
                res.userlogin = null
                next()
            }else {
                const response = await axios.post('http://localhost:8080/authCilent/checklogin', {tokenMember})
                if(response.data.userlogin){
                    const userlogin = response.data.userlogin;
                    res.userlogin = userlogin
                    next()
                }
            }
        }
        catch (error) {
            console.log(error)
        }
        
        

    }

}

module.exports = new IndexController;