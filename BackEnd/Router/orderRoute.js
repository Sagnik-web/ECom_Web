const express = require('express')
const { createOrder, getUserOrder, getAllUserOrder, getSingleUserOrder } = require('../Controller/orderController')
const orderRoute = express.Router()


orderRoute.post('/order', createOrder)
          .get('/order/:userID',getUserOrder)
          .get('/allorders',getAllUserOrder)
          .get('/order/single/:orderID',getSingleUserOrder)





module.exports = orderRoute

 