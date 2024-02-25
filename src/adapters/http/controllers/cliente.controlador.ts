import { Request, Response } from "express"
import { ClienteServicio } from "../../../application/services/cliente.servicio"

const clienteServicio = new ClienteServicio()

export async function crearCliente(req: Request, res: Response): Promise<void> {
    try {
        await clienteServicio.crearCliente(req.body)
        res.status(200).json({ mensaje: 'Cliente creada exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear cliente' })
    }
}

export async function actualizarCliente(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const clienteActualizado = await clienteServicio.actualizarCliente(id, req.body)
        if (clienteActualizado) {
            res.json(clienteActualizado)
        } else {
            res.status(404).json({ mensaje: 'Cliente no encontrada' })
        }
    } catch (error) {
        console.error('Error al actualizar cliente:', error)
        res.status(500).json({ mensaje: 'Error al actualizar cliente' })
    }
}

export async function buscarCliente(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const cliente = await clienteServicio.buscarCliente(id)
        if (cliente) {
            res.json(cliente)
        } else {
            res.status(404).json({ mensaje: 'Cliente no encontrada' })
        }
    } catch (error) {
        console.error('Error al buscar Cliente:', error)
        res.status(500).json({ mensaje: 'Error al buscar Cliente' })
    }
}

export async function eliminarCliente(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await clienteServicio.eliminarCliente(id)
        res.json({ mensaje: 'Cliente eliminada exitosamente' })
    } catch (error) {
        console.error('Error al eliminar cliente:', error)
        res.status(500).json({ mensaje: 'Error al eliminar cliente' })
    }
}