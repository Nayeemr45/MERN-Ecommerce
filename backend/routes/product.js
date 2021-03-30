import express from 'express';
import { createProduct, getProduct  } from '../controllers/product.js';
import sellerauth from '../middleware/sellerauth.js'
const router = express.Router();

router.get('/',  getProduct);

router.post('/Add_Product' , sellerauth , createProduct);

export default router;