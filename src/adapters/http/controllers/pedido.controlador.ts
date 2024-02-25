import { Request, Response } from "express"
import { PedidoServicio } from "../../../application/services/pedido.servicio"

const pedidoServicio = new PedidoServicio()

export async function crearPedido(req: Request, res: Response): Promise<void> {
    try {
        await pedidoServicio.crearPedido(req.body)
        res.status(200).json({ mensaje: 'Pedido creado exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear pedido' })
    }
}

export async function actualizarPedido(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const pedidoActualizado = await pedidoServicio.actualizarPedido(id, req.body)
        if (pedidoActualizado) {
            res.json(pedidoActualizado)
        } else {
            res.status(404).json({ mensaje: 'Pedido no encontrado' })
        }
    } catch (error) {
        console.error('Error al actualizar pedido:', error)
        res.status(500).json({ mensaje: 'Error al actualizar pedido' })
    }
}

export async function buscarPedido(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const pedido = await pedidoServicio.buscarPedido(id)
        if (pedido) {
            res.json(pedido)
        } else {
            res.status(404).json({ mensaje: 'Pedido no encontrado' })
        }
    } catch (error) {
        console.error('Error al buscar pedido:', error)
        res.status(500).json({ mensaje: 'Error al buscar pedido' })
    }
}

export async function eliminarPedido(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await pedidoServicio.eliminarPedido(id)
        res.json({ mensaje: 'pedido eliminado exitosamente' })
    } catch (error) {
        console.error('Error al eliminar pedido:', error)
        res.status(500).json({ mensaje: 'Error al eliminar pedido' })
    }
}
