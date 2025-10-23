import {Router} from 'express'
import {getClietns} from '../controllers/clientController.js'
import {postClietns} from '../controllers/clientController.js'

const clientRouter = new Router();
clientRouter.get('/getclient', getClietns)
clientRouter.post('/postclient', postClietns)

export default clientRouter