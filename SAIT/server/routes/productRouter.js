import {Router} from 'express'
import {getProduct} from '../controllers/productController.js'
import {postProduct} from '../controllers/productController.js'

const productRouter = new Router();
productRouter.get('/', getProduct)
productRouter.post('/', postProduct)

export default productRouter