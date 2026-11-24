import {v2 as cloudinary} from 'cloudinary';
const cloudinaryConfig = async(req,res)=>{
    try{

        await cloudinary.config(
            {
            cloud_name: process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET});
        }
        catch(err){
            console.log("cloudinary connection error");
            throw err;
        }
   
}
export default cloudinaryConfig;