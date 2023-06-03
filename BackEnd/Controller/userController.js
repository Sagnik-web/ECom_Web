const User = require("../Model/User")


// View All Users
exports.allUsers = async (req,res)=>{
    const users =await User.find()

    if(!users){
        return res.json({
            msg:"No User Found."
        })
    }

    res.json({
        msg:"Users Found Successfully",
        users
    })
}



// View One User
exports.oneUsers = async (req,res)=>{
    const users =await User.findOne({url_username:req.params.url_username})

    if(!users){
        return res.json({
            msg:"No User Found."
        })
    }

    res.json({
        msg:"Users Found Successfully",
        users
    })
}