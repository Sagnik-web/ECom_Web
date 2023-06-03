const express =  require('express')
const { signup, signin, protect } = require('../Controller/authController')
const authRoute = express.Router()

authRoute.post('/signup',signup)
authRoute.post('/signin',signin)
authRoute.get('/test',protect,(req,res)=>{
    res.json({
        Success:true
    })
})
// authRoute.get('/logout')


module.exports = authRoute

