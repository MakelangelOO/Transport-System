import { Request, Response } from "express"
import { CategoriaServicio } from "../../../application/services/categoria.servicio"

const categoriaServicio = new CategoriaServicio()

export async function craerCategoria(req: Request, res: Response): Promise<void> {
    try {
        await categoriaServicio.craerCategoria(req.body)
        res.status(200).json({ mensaje: 'Categoria creada exitosamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear categoria' })
    }
}

export async function actualizarCategoria(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const categoriaActualizada = await categoriaServicio.actualizarCategoria(id, req.body)
        if (categoriaActualizada) {
            res.json(categoriaActualizada)
        } else {
            res.status(404).json({ mensaje: 'Categoria no encontrada' })
        }
    } catch (error) {
        console.error('Error al actualizar Categoria:', error)
        res.status(500).json({ mensaje: 'Error al actualizar Categoria' })
    }
}

export async function buscarCategoria(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        const categoria = await categoriaServicio.buscarCategoria(id)
        if (categoria) {
            res.json(categoria)
        } else {
            res.status(404).json({ mensaje: 'Categoria no encontrada' })
        }
    } catch (error) {
        console.error('Error al buscar categoria:', error)
        res.status(500).json({ mensaje: 'Error al buscar categoria' })
    }
}

export async function eliminarCategoria(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id)
        await categoriaServicio.eliminarCategoria(id)
        res.json({ mensaje: 'Categoria eliminada exitosamente' })
    } catch (error) {
        console.error('Error al eliminar categoria:', error)
        res.status(500).json({ mensaje: 'Error al eliminar categoria' })
    }
}
