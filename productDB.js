const Product = require("./model/products.js");
const jsonfile = require("./products.json");
const connectDB = require("./db/connect.js");

// const uris = "mongodb+srv://suresh:applegirl1@cluster0.dwn2lum.mongodb.net/Cluster0?retryWrites=true&w=majority"
const start = async () => {
    try {
        await connectDB();
        await Product.create(jsonfile);
        console.log("done");

    } catch (error) {
        console.log(error);
    }
    }
    start();
    