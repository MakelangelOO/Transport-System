import { Request, Response } from "express"
import { CargamentoServicio } from "../../../application/services/cargamento.servicio"

const cargamentoServicio = new CargamentoServicio()

export async function crearCargamento(req: Request, res: Response): Promise<void> {
    try {
        await cargamentoServicio.crearCargamento(req.body)
        res.status(200).json({ mensaje: 'Cargamento creado exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear cargamento' })
    }
}

export async function actualizarCargamento(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const cargamentoActualizado = await cargamentoServicio.actualizarCargamento(id, req.body)
        if (cargamentoActualizado) {
            res.json(cargamentoActualizado)
        } else {
            res.status(404).json({ mensaje: 'Cargamento no encontrado' })
        }
    } catch (error) {
        console.error('Error al actualizar cargamento:', error)
        res.status(500).json({ mensaje: 'Error al actualizar cargamento' })
    }
}

export async function buscarCargamento(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const cargamento = await cargamentoServicio.buscarCargamento(id)
        if (cargamento) {
            res.json(cargamento)
        } else {
            res.status(404).json({ mensaje: 'Cargamento no encontrado' })
        }
    } catch (error) {
        console.error('Error al buscar cargamento:', error)
        res.status(500).json({ mensaje: 'Error al buscar cargamento' })
    }
}

export async function eliminarCargamento(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await cargamentoServicio.eliminarCargamento(id)
        res.json({ mensaje: 'Cargamento eliminado exitosamente' })
    } catch (error) {
        console.error('Error al eliminar cargamento:', error)
        res.status(500).json({ mensaje: 'Error al eliminar cargamento' })
    }
}
