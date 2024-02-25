import { Router } from "express"
import { crearCliente, actualizarCliente, buscarCliente, eliminarCliente } from "../controllers/cliente.controlador"

const clienteRouter = Router()

clienteRouter.post('/cliente', crearCliente)
clienteRouter.post('/cliente/:id', actualizarCliente)
clienteRouter.get('/cliente/:id', buscarCliente)
clienteRouter.delete('cliente/:id', eliminarCliente)

export default clienteRouter