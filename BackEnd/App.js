const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoute = require('./Router/authRoute')
const cartRoute = require('./Router/cartRoute')
const categoryRoute = require('./Router/categoryRoute')
const orderRoute = require('./Router/orderRoute')
const productRoute = require('./Router/productRoute')
const userRoute = require('./Router/userRoute')
const app = express()



app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1/auth',authRoute)
app.use('/api/v1',cartRoute)
app.use('/api/v1',categoryRoute)
app.use('/api/v1',orderRoute)
app.use('/api/v1',productRoute)
app.use('/api/v1',userRoute)







module.exports = app

