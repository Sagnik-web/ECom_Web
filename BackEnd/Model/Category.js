const mongoose = require('mongoose')



const categorySchema = new mongoose.Schema({
    category_name:{
        type:String,
        require:true,
        unique:true
    },
    url_category_name:{
        type:String,
        require:true,
        unique:true
    },
}) 



module.exports = mongoose.model('category',categorySchema)
