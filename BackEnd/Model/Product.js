const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    url_product_name:{
        type:String,
        require:true,
        unique:true
    },
    desc:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    quentity:{
        type:Number,
        require:true,
        default:0
    },
    sold:{
        type:Number,
        require:true,
        default:0
    },
    price:{
        type:Number,
        require:true
    },
    active:{
        type:Boolean,
        require:true,
        default:false
    },
    photo:{
        type:Buffer
    }
})



module.exports = mongoose.model('product',productSchema)