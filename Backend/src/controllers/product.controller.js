import Product from '../models/product.model.js';

const createProduct = async(req, res)=>{
    try{
        const product = await Product.create(req.body);

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
const getAllProducts = async(req, res)=>{
    try{

        const products = await Product.find();
        res.status(200).json(products);
    }

    catch(err){
        
        res.status(500).json({
            message:err.message
        });
    }
}
export {createProduct,getAllProducts};