import app from './app.js';
import "dotenv/config";
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';

const PORT = process.env.PORT;

const startServer = async()=>{
    try{

        await connectDB();
        await connectCloudinary();
        
        app.listen(PORT,()=>{
            console.log("Server is listening at port: "+ PORT);
        });

    }
    catch(err){
        console.error("Server Startup failed ",err.message);
        process.exit(1);
    }
    
}
startServer();



