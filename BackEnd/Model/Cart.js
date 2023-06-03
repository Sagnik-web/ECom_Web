const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types

const cartSchema = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:'product'
    },
    user_url:{
        type:String,
        require:true
    },
    product_name:{
        type:String,
        require:true
    },
    single_price:{
        type:Number,
        require:true
    },
    number_of_item:{
        type:String,
        require:true,
        default:1
    }
})

module.exports = mongoose.model('cart',cartSchema)