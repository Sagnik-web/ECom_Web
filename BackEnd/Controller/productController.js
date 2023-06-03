const Product = require("../Model/Product")
const slugify = require('slugify')


// Create
exports.productCreate =async (req,res)=>{
    const {name,desc,quentity,price,category} = req.body

    const product = await Product.create({
        name:name,
        url_product_name:slugify(name),
        desc:desc,
        quentity:quentity,
        price:price,
        category:category
    })

    if(!product){
        return res.json({
            msg:"Product Is not Creted."
        })
    }

    res.json({
        msg:"Product is created successfully.",
        product
    })
}


// Update Quentity Desc
exports.productUpdate =async (req,res)=>{
    const {url_product} = req.params

    const {quentity,desc} = req.body

    const updateItem = await Product.findOneAndUpdate({url_product_name:url_product},{
        quentity:quentity,
        desc:desc
    },{new:true})

    if(!updateItem){
        return res.json({
            msg:"Product Is not Updated Successfully."
        })
    }
    
    res.json({
        msg:"Product Updated Successfully",
        updateItem
    })

}


// Update Active 
exports.productActiveUpdate =async (req,res)=>{
    const {url_product} = req.params

    const {active} = req.body

    const updateItem = await Product.findOneAndUpdate({url_product_name:url_product},{
        active:active
    },{new:true})

    if(!updateItem){
        return res.json({
            msg:"Product Active Is not Updated Successfully."
        })
    }
    
    res.json({
        msg:"Product Active Updated Successfully",
        updateItem
    })

}



// Delete
exports.productDelete = async(req,res)=>{
    const {url_product} = req.params

    const deleteItem = await Product.findOneAndDelete({url_product_name:url_product})

    if(!deleteItem){
        return res.json({
            msg:"Product Is not Deleted Successfully."
        })
    }

    res.json({
        msg:"Product Deleted Successfully"
    })
}


// All Items Show 
exports.productAllItems = async(req,res)=>{
    const products = await Product.find()

    if(!products){
        return res.json({
            msg:"Product Is Not Found."
        })
    }

    res.json({
        msg:"Products Get successfully.",
        products
    })
}


// Single Item Show
exports.productOneItem =async (req,res)=>{
    const {url_product} = req.params

    const product = await Product.findOne({url_product_name:url_product})

    if(!product){
        return res.json({
            msg:"Product Is Not Found."
        })
    }

    res.json({
        msg:"Product Get successfully.",
        product
    })
}

