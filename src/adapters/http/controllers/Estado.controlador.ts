import { Request, Response } from "express"
import { EstadoServicio } from "../../../application/services/estado.servicio"

const estadoServicio = new EstadoServicio()

export async function crearEstado(req: Request, res: Response): Promise<void> {
    try {
        await estadoServicio.crearEstado(req.body)
        res.status(200).json({ mensaje: 'Estado creado exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear estado' })
    }
}

export async function actualizarEstado(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const estadoActualizado = await estadoServicio.actualizarEstado(id, req.body)
        if (estadoActualizado) {
            res.json(estadoActualizado)
        } else {
            res.status(404).json({ mensaje: 'Estado no encontrado' })
        }
    } catch (error) {
        console.error('Error al actualizar estado:', error)
        res.status(500).json({ mensaje: 'Error al actualizar estado' })
    }
}

export async function buscarEstado(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const estado = await estadoServicio.buscarEstado(id)
        if (estado) {
            res.json(estado)
        } else {
            res.status(404).json({ mensaje: 'Estado no encontrado' })
        }
    } catch (error) {
        console.error('Error al buscar estado:', error)
        res.status(500).json({ mensaje: 'Error al buscar estado' })
    }
}

export async function eliminarEstado(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await estadoServicio.eliminarEstado(id)
        res.json({ mensaje: 'Estado eliminado exitosamente' })
    } catch (error) {
        console.error('Error al eliminar estado:', error)
        res.status(500).json({ mensaje: 'Error al eliminar estado' })
    }
}
