import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/order.js'
//import { protect, admin } from '../middleware/authMiddleware.js'
import auth from '../middleware/auth.js'

/* router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)
 */
router.post('/' , auth , addOrderItems);
router.get('/:id' , auth , getOrders);
router.get('/myorders' , auth , getMyOrders);
router.put('/:id' , auth , updateOrderToPaid);
router.put('/:id/deliver' , auth , updateOrderToDelivered);

export default router
