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
    imageUrl:{
       
            type:String,
            required:true
       
    },
    description:{
        type:String
    }

}

)
const PopularProducts = mongoose.model("popular-products",productSchema,"popular-products")
const ProductsOnSale = mongoose.model("products-onsale",productSchema,"products-onsale");

export {ProductsOnSale,PopularProducts};