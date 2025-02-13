import "dotenv/config"

import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`Mongo DB connected || DB host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("mongo connection error ",error);
        process.exit(1)
        
    }
}

export {connectDb}