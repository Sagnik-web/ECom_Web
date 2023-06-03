const express = require('express')
const { createCategory, deleteCategory } = require('../Controller/categoryController')
const categoryRoute = express.Router()


categoryRoute.post('/category',createCategory)
categoryRoute.delete('/category/:category_url',deleteCategory)





module.exports = categoryRoute

 