import express from 'express';
import { createProduct, getProduct, getProductDetails  } from '../controllers/product.js';
import sellerauth from '../middleware/sellerauth.js'
const router = express.Router();

router.get('/',  getProduct);
router.get('/:id',  getProductDetails);

router.post('/Add_Product' , sellerauth , createProduct);

export default router;