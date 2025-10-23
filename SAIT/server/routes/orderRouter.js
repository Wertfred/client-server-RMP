import {Router} from 'express'
import {getOrder} from '../controllers/orderControllers.js'
import {postOrder} from '../controllers/orderControllers.js'

const orderRouter = new Router();
orderRouter.get('/getorder', getOrder)
orderRouter.post('/postorder', postOrder)

export default orderRouter