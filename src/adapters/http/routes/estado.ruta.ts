import { Router } from "express"
import { crearEstado, actualizarEstado, buscarEstado, eliminarEstado } from "../controllers/Estado.controlador"

const estadoRouter = Router()

estadoRouter.post('/estado', crearEstado)
estadoRouter.post('/estado/:id', actualizarEstado)
estadoRouter.get('/estado/:id', buscarEstado)
estadoRouter.delete('/estado/:id', eliminarEstado)
export default estadoRouter