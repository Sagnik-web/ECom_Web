const Cart = require("../Model/Cart")


// Create
exports.cartCreate =async (req,res) =>{
    const {product,user_url,product_name,single_price,number_of_item} = req.body

    const cart = await Cart.create({
        product:product,
        user_url:user_url,
        product_name:product_name,
        single_price:single_price,
        number_of_item:number_of_item
    })

    if(!cart){
        return res.json({
            msg:"Cart is not created."
        })
    }

    res.json({
        msg:"Cart Created Successfully.",
        cart
    })
}


// update
exports.updateCartCreate =async (req,res) =>{
    const {number_of_item} = req.body
    const {ID} = req.params

    const cart = await Cart.findByIdAndUpdate(ID,{
        number_of_item:number_of_item
    },{new:true})

    if(!cart){
        return res.json({
            msg:"Cart is not created."
        })
    }

    res.json({
        msg:"Cart Created Successfully.",
        cart
    })
}


// Delete
exports.cartDelete =async (req,res) =>{
    const {ID} = req.params

    const cart = await Cart.findByIdAndDelete(ID)
    if(!cart){
        return res.json({
            msg:"Cart is not Deleted."
        })
    }

    res.json({
        msg:"Cart Deleted Successfully."
    })
}



// Show All Cart By User
exports.userAllCart = async (req,res) =>{
    const {user_url} = req.params

    const userCart = await Cart.find({user_url:user_url})
    if(!userCart){
        return res.json({
            msg:"No User Cart Found."
        })
    }

    res.json({
        msg:"Cart Found Successfully.",
        cart:userCart
    })
}


