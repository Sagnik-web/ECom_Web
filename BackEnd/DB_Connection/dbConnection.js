// require('dotenv').config()
const mongoose = require('mongoose')



const DB_Connection = (DB_URL) =>{
    mongoose.connect(DB_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Database Connected Successfully.');
    }).catch(err=>{
        console.log(`Error: ${err}`);
    })

}


module.exports = DB_Connection



