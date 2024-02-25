import {Router} from 'express'
import { actualizarVehiculo, crearVehiculo, buscarVehiculo, eliminarVehiculo } from '../application/vehiculo.controlador'


const vehiculoRouter = Router()

vehiculoRouter.post('/vehiculo', crearVehiculo)
vehiculoRouter.post('/vehiculo/:id', actualizarVehiculo)
vehiculoRouter.get('/vehiculo/:id', buscarVehiculo)
vehiculoRouter.delete('/vehiculo/:id', eliminarVehiculo)

export default vehiculoRouter