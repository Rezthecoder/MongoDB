 const Product =require('../model/products')



const getAllProducts =async  (req,res)=> {
  const data = await Product.find({});
    res.json(data);
}

    

const getAllProductsTesting =() => {

    console.log("hello i am gellAllProductsTesting");
}

module.exports = { getAllProducts, getAllProductsTesting };