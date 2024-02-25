import {Router} from 'express'
import { crearPersona, actualizarPersona, buscarPersona, eliminarPersona } from '../application/persona.controlador'


const personaRouter = Router()

personaRouter.post('/persona', crearPersona)
personaRouter.post('/persona/:id', actualizarPersona)
personaRouter.get('/persona/:id', buscarPersona)
personaRouter.delete('/persona/:id', eliminarPersona)

export default personaRouter