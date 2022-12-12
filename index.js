
const express = require('express')
// const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./db/connect.js')
const port = 3000
mongoose.set('strictQuery', true);

// dotenv.config({ path: "./.env" });
// const url = process.env.URLs;

app.get('/', (req, res) => {
//   res.send('Hello World!')
res.sendFile (__dirname + '/index.html' );
})

app.use("/api/products", require("./routes/products"));


const start = async () => {
  try {
    await connectDB()
    console.log('connected successfully')
  
  } catch (error) {
    console.log(error)
    
  }
}
start();
  app.listen(port, () => {
  
    console.log(`Example app listening on port ${port}: http://localhost:${port}`)
   
  })





