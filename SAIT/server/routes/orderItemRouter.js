import {Router} from 'express'
import {getOrder_item} from '../controllers/orderItemController.js'
import {postOrder_item} from '../controllers/orderItemController.js'

const order_itemRouter = new Router();
order_itemRouter.get('/getorder_item', getOrder_item)
order_itemRouter.post('/postorder_item', postOrder_item)

export default order_itemRouter