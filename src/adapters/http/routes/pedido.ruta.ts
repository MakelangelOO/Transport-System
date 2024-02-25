import { Router } from "express"
import { crearPedido, actualizarPedido, buscarPedido, eliminarPedido } from "../controllers/pedido.controlador"

const pedidoRouter = Router()

pedidoRouter.post('/pedido', crearPedido)
pedidoRouter.post('/pedido/:id', actualizarPedido)
pedidoRouter.get('/pedido/:id', buscarPedido)
pedidoRouter.delete('/pedido/:id', eliminarPedido)

export default pedidoRouter