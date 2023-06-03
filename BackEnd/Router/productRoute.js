const express = require('express')
const { productCreate, productAllItems, productUpdate, productDelete, productOneItem, productActiveUpdate } = require('../Controller/productController')
const productRoute = express.Router()


productRoute.post('/product',productCreate)
            .get('/product',productAllItems)
            .get('/product/:url_product',productOneItem)
            .patch('/product/:url_product',productUpdate)
            .patch('/productActive/:url_product',productActiveUpdate)
            .delete('/product/:url_product',productDelete)





module.exports = productRoute

