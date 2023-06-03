const app = require("./App");
const DB_Connection = require("./DB_Connection/dbConnection");
require('dotenv').config()


// Database Connection
const DB_URL = process.env.DATA_BASE
DB_Connection(DB_URL)


// Server Listen
const port = process.env.PORT 
app.listen(port,()=>{
        console.log(`Server is running on port number ${port}....`);
})
