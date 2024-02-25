import { Router } from "express"
import { craerCategoria, actualizarCategoria, buscarCategoria, eliminarCategoria } from "../controllers/categoria.controlador"

const categoriaRouter = Router()

categoriaRouter.post('/categoria', craerCategoria)
categoriaRouter.post('/categoria/:id', actualizarCategoria)
categoriaRouter.get('/categoria/:id', buscarCategoria)
categoriaRouter.delete('/categoria/:id', eliminarCategoria)

export default categoriaRouter