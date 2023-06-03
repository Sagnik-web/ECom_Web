const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto')
const bcrypt = require('bcrypt')



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:3,
        max:30
    },
    userName:{
        type:String,
        require:true,
        min:5,
        max:40,
        unique:true
    },
    url_username:{
        type:String,
        require:true,
        min:5,
        max:40,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        require:true
    },
    avater:{
        type:Buffer
    },
    role:{
        type:Number,
        enum:[0,1],
        default:0
    },
    history:{
        type:Array,
        default:[]
    },
    resetPaswordToken:String,
    resetPaswordTokenExp:Number
},{timestamps:true})

// userSchema.virtual('password').set(function(password){
//     this._password = password

//     this.salt = this.makeSalt()

//     this.hash_Password = this.encryptPassword(password)
// }).get(function(){
//     return _password
// })

// userSchema.methods = {
//     authenticate: function(plainText){
//         return this.encryptPassword(plainText) == this.hash_Password
//     },

//     encryptPassword: function(password){
//         if (!password) return ''

//         try{
//             return crypto.createHash('sha1',this.salt).update(password).digest('hex')
//         }catch(err){
//             return ''
//         }
//     },

//     makeSalt: function(){
//         return Math.round(new Date.valuOf() * Math.random()) + ''
//     }
// }

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }

    // this.password = await bcrypt.hash(this.password,12)
    next()
})

userSchema.methods.comparePassword =async function(currentPassword){
    // console.log(await bcrypt.compare(this.password, currentPassword));
    // return await bcrypt.compare(currentPassword,this.password)
    return currentPassword == this.password
}

module.exports = mongoose.model('user',userSchema)