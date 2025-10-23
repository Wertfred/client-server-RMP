import {Router} from 'express'
import {getProduct} from '../controllers/productController.js'
import {postProduct} from '../controllers/productController.js'

const productRouter = new Router();
productRouter.get('/getproduct', getProduct)
productRouter.post('/postproduct', postProduct)

export default productRouter