import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    price: {
        type:Number,
        required: true
    },
    rating:{
    
        type:Number,
        required:true,
    },
    ratingCount:{
        type:Number,
        required:true
    },
    image:{
        url:{
            type:String,
        },
        publicId:{
            type:String
        }  
    },
    description:{
        type:String
    }

}

)
const Product = mongoose.model("Product",productSchema);
export default Product;