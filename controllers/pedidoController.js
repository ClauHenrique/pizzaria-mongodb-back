import { Pedidos } from '../models/Pedidos.js'

export const montarPedido = async (req, res) => {
    try {
        const {idCliente, nomeCliente, compras, acompanhamento} = req.body

        const pedido = new Pedidos({
            idCliente,
            nomeCliente,
            data: new Date(),
            compras,
            acompanhamento,
        })

        await pedido.save()
        return res.status(201).json("cadastrado")
    }
    catch (err) {
        const body = {
            "idCliente": "ID",
            "nomeCliente": "NOME",
            "compras": [
                {
                    "idPizza": "ID",
                    "quantPedida": "Number"
                },
            ],
            "acompanhamento": [
                {
                    "nomeProd": "NOME DE UM PRODUTO QUALQUER",
                    "Valor": Number
                },
            ]
        }
        return res.status(500).json({
            msg: "o corpo da requisicao deve ser no seguinto formato: ",
            body
        })
    }
}