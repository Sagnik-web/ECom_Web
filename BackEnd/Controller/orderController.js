const Order = require("../Model/Order")
const User = require("../Model/User")


// create 
exports.createOrder = async (req,res) =>{
    // const {products,amount,address} = req.body
    const order = await Order.create(req.body)
    if(!order){
        return res.json({
            msg:"Order Error"
        })
    }

    res.json({
        msg:"Order placed Successfully.",
        order
    })
}


//update OrderStatus Admin
exports.updateOrderStatus = async(req,res)=>{
    const {orderID} = req.params
    const {status} = req.body

    let updateStatus =''
    if(status == "Canceled"){
        updateStatus = await Order.findByIdAndUpdate(orderID,{
            status:status,
            isCanceled:true
        },{new:true})
    }
    else{
        updateStatus = await Order.findByIdAndUpdate(orderID,{
            status:status
        },{new:true})

    }

    if(!updateStatus){
        return res.json({
            msg:"Status is Not Updated"
        })
    }

    res.json({
        msg:"Order Status Updated Successfully Successfully."
    })

}


// update user
exports.updateOrderIsCanceled = async(req,res)=>{
    const {orderID} = req.params

    const updateStatus = await Order.findByIdAndUpdate(orderID,{
        status:"Canceled",
        isCanceled:true
    },{new:true})

    if(!updateStatus){
        return res.json({
            msg:"Status is Not Updated"
        })
    }


    res.json({
        msg:"Order Status Canceled Successfully Successfully."
    })

}



//delete by Admin
exports.deleteOrderAdmin = async (req,res)=>{
    const deleteOrder = await Order.findByIdAndDelete(req.params.orderID)
    if(!deleteOrder){
        return res.json({
            msg:"Order Error"
        })
    }

    res.json({
        msg:"Order Deleted Successfully."
    })
}



//view
exports.getUserOrder = async (req,res) =>{
    const {userID} = req.params
    const order = await Order.find({user:userID})
    if(!order){
        return res.json({
            msg:"No Order Found."
        })
    }

    res.json({
        msg:"Order Get Successfully.",
        order
    })
}



exports.getSingleUserOrder = async(req,res)=>{
    const {orderID} = req.params
    const order = await Order.findById(orderID)

    if(!order){
        return res.json({
            msg:"No Order Found."
        })
    }

    res.json({
        msg:"Order Get Successfully.",
        order
    })
}



// All Orders -- Admin
exports.getAllUserOrder = async (req,res) =>{
    // const {userID} = req.body
    const order = await Order.find()
    if(!order){
        return res.json({
            msg:"No Order Found."
        })
    }

    res.json({
        msg:"Order Get Successfully.",
        order
    })
}


