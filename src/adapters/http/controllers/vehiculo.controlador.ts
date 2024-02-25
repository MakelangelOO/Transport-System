import { Request, Response, response } from "express"
import { VehiculoServicio } from "../../../application/services/vehiculo.servicio"

const vehiculoServicio = new VehiculoServicio()

export async function crearVehiculo(req: Request, res: Response): Promise<void> {
    try {
        await vehiculoServicio.crearVehiculo(req.body)
        res.status(200).json({ mensaje: 'Vehículo creado exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear vehículo' })
    }
}

export async function actualizarVehiculo(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await vehiculoServicio.actualizarVehiculo(id, req.body)
        res.json({ mensaje: 'Vehículo actualizado exitosamente' })
    } catch (error) {
        console.error('Error al actualizar vehículo:', error)
        res.status(500).json({ mensaje: 'Error al actualizar vehículo' })
    }
}

export async function buscarVehiculo(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const vehiculo = await vehiculoServicio.buscarVehiculo(id)
        if (!vehiculo) {
            res.status(404).json({ mensaje: 'Vehículo no encontrado' })
        } else {
            res.json(vehiculo)
        }
    } catch (error) {
        console.error('Error al buscar vehículo:', error)
        res.status(500).json({ mensaje: 'Error al buscar vehículo' })
    }
}

export async function eliminarVehiculo(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await vehiculoServicio.eliminarVehiculo(id)
        res.json({ mensaje: 'Vehículo eliminado exitosamente' })
    } catch (error) {
        console.error('Error al eliminar vehículo:', error)
        res.status(500).json({ mensaje: 'Error al eliminar vehículo' })
    }
}

export async function obtenerVehiculosDisponibles(req: Request, res: Response): Promise<void> {
    try {
        const vehiculos = await vehiculoServicio.obtenerVehiculosDisponibles()
        if(!vehiculos)res.status(404).json({mensaje: 'No hay vehiculos disponibles'})
        res.status(200).json(vehiculos)
    } catch (error) {
        console.error('Error al consultar vehiculos', error)
        res.status(500).json({ mensaje: 'Error al consultar vehiculos' })
        
    }
}