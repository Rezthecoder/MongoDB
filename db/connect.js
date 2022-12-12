 const mongoose = require('mongoose')
 const uri = "mongodb+srv://suresh:pass@cluster0.dwn2lum.mongodb.net/SureshAPI?retryWrites=true&w=majority"
 const connectDB =()=>{
    console.log('connected to db');
    
   return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    
    )
 }
module.exports = connectDB