import "dotenv/config"

import { connectDb } from "./db/index.js"
import { app } from "./app.js"
const PORT = process.env.PORT || 8001




connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running on port: ${PORT}`);
    })
})
.catch((error)=>{
    console.log(`MongoDb connection failed ${error}`);
    
})