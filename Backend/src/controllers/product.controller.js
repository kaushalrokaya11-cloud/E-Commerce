import {ProductsOnSale,PopularProducts} from '../models/product.model.js';


const createProduct = async(req, res)=>{
    try{
        const product = await ProductsOnSale.create(req.body);

        res.status(201).json({
            message:"Product created sucessfully",
            product
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        });
    }
} 
const getOnSaleProducts = async(req, res)=>{
    try{

        const products = await ProductsOnSale.find();
        res.status(200).json(products);
    }

    catch(err){
        
        res.status(500).json({
            message:err.message
        });
    }
}
const getPopularProducts = async function(req,res){
    try{
        const data =await PopularProducts.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).send(err.message);
    };
}
export {createProduct,getOnSaleProducts,getPopularProducts};