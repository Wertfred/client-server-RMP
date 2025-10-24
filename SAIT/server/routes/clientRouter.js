import {Router} from 'express'
import {getClietns} from '../controllers/clientController.js'
import {postClietns} from '../controllers/clientController.js'

const clientRouter = new Router();
clientRouter.get('/', getClietns)
clientRouter.post('/', postClietns)

export default clientRouter