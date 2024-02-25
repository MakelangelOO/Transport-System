import { Router } from "express"
import { crearConductor, actualizarConductor, buscarConductor, eliminarConductor, consultarCargasVehiculosAsociados } from "../controllers/conductor.controlador"

const conductorRouter = Router()

conductorRouter.post('/conductor', crearConductor)
conductorRouter.post('/conductor/:id', actualizarConductor)
conductorRouter.get('/conductor/:id', buscarConductor)
conductorRouter.delete('/conductor/:id', eliminarConductor)
conductorRouter.get('/conductor/:id/cargasyvehiculos', consultarCargasVehiculosAsociados)

export default conductorRouter