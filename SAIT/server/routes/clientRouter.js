import {Router} from 'express'
import {getClients, postClient, getOneClient, deleteClient} from '../controllers/clientController.js'

const clientRouter = new Router();
clientRouter.get('/', getClients)
clientRouter.get('/:id', getOneClient)
clientRouter.post('/', postClient)
clientRouter.delete('/:id', deleteClient)
export default clientRouter