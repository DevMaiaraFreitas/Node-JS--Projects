//import mongodb from "mongodb";
import mongoose from "mongoose";

/* utilizando mongo
function getClient(){
    const uri = "mongodb+srv://root:igti@cluster0.ydktm2c.mongodb.net/?retryWrites=true&w=majority";
    return new mongodb.MongoClient(uri);
}
*/

async function connect(){
    const uri = "mongodb+srv://root:igti@cluster0.ydktm2c.mongodb.net/?retryWrites=true&w=majority";
    return await mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true} );
}


export {connect}