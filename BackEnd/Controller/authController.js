const User = require("../Model/User")
const slugify = require('slugify')
const jwt = require('jsonwebtoken')

const Token = (ID) =>{
    return jwt.sign({ID},process.env.TOKEN_SECRET,{
        expiresIn:process.env.TOKEN_EXP
    })
}

exports.signup = async (req,res)=>{
    const {name,userName,email,password} = req.body

    const oldEmail = await User.findOne({email})
    if(oldEmail){
        return res.json({
            msg:"Email Is Already register"
        })
    }

    const user = await User.create({
        name:name,
        userName:userName,
        url_username:slugify(userName),
        email:email,
        password:password
    })



    if(!user){
        return res.json({
            msg:"Signup Unsuccessful.",
            
        })
    }

    const token =await Token(user._id)

    res.json({
        msg:"Signup Successful.",
        token,
        user
    })
}




exports.signin = async(req,res) =>{
    const {email,password} = req.body

    if(!email || !password) {
        return res.json({
            msg:"Email Or Password Not Found."
        })
    }

    const user = await User.findOne({email:email}).select('+password')
    if(!user){
        return res.json({
            msg:"User Not Found.",
            
        })
    }

    const checkPass = await user.comparePassword(password)
    if(!checkPass){
        return res.json({
            msg:"Wrong Password.",
            
        })
    }

    const token =await Token(user._id)

    res.cookie('token',token,{expiresIn:'1d'})

    res.json({
        msg:"Login Successful.",
        token,
        user
    })
}




exports.protect =async (req,res,next) =>{
    // try{
    // if(!req.headers.authorization || !req.headers.authorization.startsWith('sagnik')){
    //     res.status(404).json({
    //         status:"Fail",
    //         massage:"authorization is incorrect"
    //     })
    // }

    const {token} = req.cookies
    // console.log(mobAuth)
    if(!token){
        res.status(404).json({
            status:"Fail",
            massage:"token is incorrect"
        })
    }

    const {ID} =await jwt.verify(token,process.env.TOKEN_SECRET)
    // console.log(d)

    if(!ID){
        return res.status(404).json({
            status:"Fail",
            massage:"Id is not Found."
        })
    }
    const data = await User.findById(ID)
    // console.log(data)
    
    if(!data){
       return res.status(404).json({
            status:"Fail",
            massage:"Hear is no data"
        })
    } 
    req.user = data

    
    next()
// }catch(err=>{
//     res.status(200).json({
//         msg:"You are not loggedin"
//         // massage:err
//     })
// })
   

    // res.status(404).json({
    //     status:"Fail",
    //     massage:"authorization is incorrect"
    // })
   
}


