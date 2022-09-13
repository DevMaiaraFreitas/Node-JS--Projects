//import { getClient } from "./mongo.db.js";
import { connect } from "./mongo.db.js";
import ProductInfoSchema from "../schemas/productInfo.schema.js"



async function createProductInfo(productInfo){

    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        productInfo = new ProductInfo(productInfo);
        await productInfo.save();
    }catch(err){
        throw err;
    }
    
    /*const client = getClient();
    try{
        await client.connect();
        await client.db("store").collection("productInfo").insertOne(productInfo);
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }*/
}

async function updateProductInfo(productInfo){

    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("productInfo", ProductInfoSchema);
        await ProductInfo.findOneAndUpdate ({productId: productInfo.productId}, productInfo);
        
    }catch(err){
        throw err;
    }

    /*const client = getClient();
    try{
        await client.connect();
        await client.db("store").collection("productInfo").updateOne(
            {productId: productInfo.productId},
            {$set: {...productInfo}}
        );
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }*/
}

async function getProductInfo(productId){

    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("productInfo", ProductInfoSchema);
        const query = ProductInfo.findOne({productId});
        return await query.exec();
    }catch(err){
        throw err;
    }

    /*const client = getClient();
    try{
        await client.connect();
        return await client.db("store").collection("productInfo").findOne({productId});
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }*/
}

async function createReview(review, productId){
   
   try{
        const productInfo = await getProductInfo(productId);
        productInfo.reviews.push(review);
        await updateProductInfo(productInfo);
    }catch(err){
        throw err;
    }
}

async function deleteReview(productId, index){
  
     try{
        const productInfo = await getProductInfo(productId);
        productInfo.reviews.splice(index, 1);
        await updateProductInfo(productInfo);
    }catch(err){
        throw err;
    }
}

async function findAll(){

    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("productInfo", ProductInfoSchema);
        const query = ProductInfo.find({});
        return await query.exec();
    }catch(err){
        throw err;
    }

    /*const client = getClient();
    try{
        await client.connect();
        return await client.db("store").collection("productInfo").find({}).toArray();
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }*/
}

async function deleteProductInfo(productId){

    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("productInfo", ProductInfoSchema);
        await ProductInfo.deleteOne({productId});
        
    }catch(err){
        throw err;
    }

    /*const client = getClient();
    try{
        await client.connect();
        return await client.db("store").collection("productInfo").deleteOne({productId});
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }*/
}

export default {
    createProductInfo, 
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo
}