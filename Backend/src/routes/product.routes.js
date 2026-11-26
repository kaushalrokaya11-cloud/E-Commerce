import express from 'express'
import {createProduct,getOnSaleProducts,getPopularProducts} from '../controllers/product.controller.js';


const router = express.Router();

router.get('/on-sale',getOnSaleProducts);
router.get('/popular-products',getPopularProducts);
router.post('/create',createProduct);

export default router;
