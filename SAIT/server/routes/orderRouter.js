import {Router} from 'express'
import {getOrder, updateStatusOrder, deleteOrder} from '../controllers/orderControllers.js'

const orderRouter = new Router();
orderRouter.get('/', getOrder)
// orderRouter.post('/', postOrder)
orderRouter.patch('/:id', updateStatusOrder)
orderRouter.delete('/id', orderRouter)

export default orderRouter