const express = require('express')
const { cartCreate, userAllCart, cartDelete, updateCartCreate } = require('../Controller/cartController')
const { patch } = require('./userRoute')
const cartRoute = express.Router()


cartRoute.get('/cart/:user_url',userAllCart)
         .post('/cart',cartCreate)
         .delete('/cart/:ID',cartDelete)
         .patch('/cart/:ID',updateCartCreate)





module.exports = cartRoute

 