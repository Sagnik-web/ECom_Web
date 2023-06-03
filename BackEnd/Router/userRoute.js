const express = require('express')
const { allUsers, oneUsers } = require('../Controller/userController')
const userRoute = express.Router()


userRoute.get('/allUsers',allUsers)
userRoute.get('/user/:url_username',oneUsers)




module.exports = userRoute

