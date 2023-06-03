const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types



const orderSchema = new mongoose.Schema({
    products:[
        {
            type:ObjectId,
            ref:'cart',
            require:true
        }
    ],
    transaction_id:{},
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true,
        min:6
    },
    isCanceled:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        require:true,
        enum:[
            "not deleverd",
            "On Way",
            "deleverd",
            "Canceled"
        ],
        default:"not deleverd"
    },
    user:{
        type:ObjectId,
        ref:'user'
    },
    updated:{
        type:Date
    }
},{timestamps:true})



module.exports = mongoose.model('order',orderSchema)



