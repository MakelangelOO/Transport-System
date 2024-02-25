import { Request, Response } from "express"
import { ConductorServicio } from "../../../application/services/conductor.servicio"

const conductorServicio = new ConductorServicio()

export async function crearConductor(req: Request, res: Response): Promise<void> {
    try {
        await conductorServicio.crearConductor(req.body)
        res.status(200).json({ mensaje: 'Conductor creado exitosamente' })
    } catch (e) {
        console.error(e)
        res.status(500).json({ mensaje: 'Error al crear conductor' })
    }
}

export async function actualizarConductor(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await conductorServicio.actualizarConductor(id, req.body)
        res.json({ mensaje: 'Conductor actualizado exitosamente' })
    } catch (e) {
        console.error('Error al actualizar conductor:', e)
        res.status(500).json({ mensaje: 'Error al actualizar conductor' })
    }
}

export async function buscarConductor(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const conductor = await conductorServicio.buscarConductor(id)
        if (!conductor) {
            res.status(404).json({ mensaje: 'Conductor no encontrado' })
        } else {
            res.json(conductor)
        }
    } catch (e) {
        console.error('Error al buscar conductor:', e)
        res.status(500).json({ mensaje: 'Error al buscar conductor' })
    }
}

export async function eliminarConductor(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await conductorServicio.eliminarConductor(id)
        res.json({ mensaje: 'Conductor eliminado exitosamente' })
    } catch (e) {
        console.error('Error al eliminar conductor:', e)
        res.status(500).json({ mensaje: 'Error al eliminar conductor' })
    }
}

export async function consultarCargasVehiculosAsociados (req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const cargasYVehiculos = await conductorServicio.consultarCargasVehiculosAsociados(id)
        if(!cargasYVehiculos) res.status(404).json({mensaje: 'registros no encontrados'})
        res.status(200).json(cargasYVehiculos)
    } catch (e) {
        console.error('Error al buscar  registros', e)
        res.status(500).json({ mensaje: 'Error al buscar registros' })
    }
}
