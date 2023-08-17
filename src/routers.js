import Express from 'express'
import { 
    cadastrarCliente,
    getCliente,
    listarClientes,
    pesquisarCliente
} from '../controllers/clienteController.js'

import { 
    cadastrarPizza,
    listarPizzas
} from '../controllers/pizzaController.js'

const router = Express.Router()

router.post('/cadastrarCliente', cadastrarCliente)
router.get('/getCliente/:cpf', getCliente)



router.post('/cadastrarPizza', cadastrarPizza)
router.get('/listarPizzas', listarPizzas)

export default router