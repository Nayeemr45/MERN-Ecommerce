import express from 'express';
import { createProduct, getProduct  } from '../controllers/product.js';
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/',  getProduct);

router.post('/' , auth , createProduct);

export default router;