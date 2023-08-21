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

import { 
    montarPedido,
    listarPedidos,
    pesquisarPedidoCliente,
    atualizarPedidoCliente,
    deletarPedidoCliente
 } from '../controllers/pedidoController.js'

const router = Express.Router()

router.post('/cadastrarCliente', cadastrarCliente)

router.get('/listarClientes', listarClientes)

// pesquisa por um cliente e retorna seus dados, passando o cpf como parametro
router.get('/getCliente/:cpf', getCliente)

// retorna todos os usuarios cujo o inicio do nome corresponda a uma string de busca 
router.get('/pesquisarCliente/:name', pesquisarCliente)


router.post('/cadastrarPizza', cadastrarPizza)
router.get('/listarPizzas', listarPizzas)


router.post('/montarPedido', montarPedido)
router.get('/listarPedidos', listarPedidos)
router.get('/pesquisarPedido/:nameClient', pesquisarPedidoCliente)
router.put('/atualizarPedido/:id', atualizarPedidoCliente)
router.delete('/deletarPedido/:id', deletarPedidoCliente)


export default router