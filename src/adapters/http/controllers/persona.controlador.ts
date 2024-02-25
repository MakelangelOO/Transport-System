import { Request, Response } from "express"
import { PersonaServicio } from "../../../application/services/persona.servicio"

const personaServicio = new PersonaServicio()

export async function crearPersona(req: Request, res: Response): Promise<void> {
    try {
        await personaServicio.crearPersona(req.body)
        res.status(200).json({ mensaje: 'Persona creada exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear persona' })
    }
}

export async function actualizarPersona(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const personaActualizada = await personaServicio.actualizarPersona(id, req.body)
        if (personaActualizada) {
            res.json(personaActualizada)
        } else {
            res.status(404).json({ mensaje: 'Persona no encontrada' })
        }
    } catch (error) {
        console.error('Error al actualizar persona:', error)
        res.status(500).json({ mensaje: 'Error al actualizar persona' })
    }
}

export async function buscarPersona(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const persona = await personaServicio.buscarPersona(id)
        if (persona) {
            res.json(persona)
        } else {
            res.status(404).json({ mensaje: 'Persona no encontrada' })
        }
    } catch (error) {
        console.error('Error al buscar persona:', error)
        res.status(500).json({ mensaje: 'Error al buscar persona' })
    }
}

export async function eliminarPersona(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await personaServicio.eliminarPersona(id)
        res.json({ mensaje: 'Persona eliminada exitosamente' })
    } catch (error) {
        console.error('Error al eliminar persona:', error)
        res.status(500).json({ mensaje: 'Error al eliminar persona' })
    }
}
