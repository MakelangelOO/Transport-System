import { Router } from "express"
import { crearCargamento, actualizarCargamento, buscarCargamento, eliminarCargamento } from "../controllers/cargamento.contralador"

const cargamentoRouter = Router()

cargamentoRouter.post('/cargamento', crearCargamento)
cargamentoRouter.post('/cargamento/:id', actualizarCargamento)
cargamentoRouter.get('/cargamento/:id', buscarCargamento)
cargamentoRouter.delete('/cargamento/:id', eliminarCargamento)

export default cargamentoRouter