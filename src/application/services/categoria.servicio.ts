import { AppDataSource } from "../../ports/db"
import { Repository } from "typeorm"
import { Categoria } from "../../domain/repositories/categoria"

export class CategoriaServicio {
    private categoriaRepository: Repository<Categoria>

    constructor () {
        this.categoriaRepository = AppDataSource.getRepository(Categoria)
    }

    async craerCategoria(data: Partial<Categoria>): Promise<void> {
        const nuevaCategoria = this.categoriaRepository.create(data)
        await this.categoriaRepository.save(nuevaCategoria)
    }

    async actualizarCategoria(id: number, data: Partial<Categoria>): Promise<Categoria | undefined> {
        const categoria = await this.categoriaRepository.findOne({where:{id: id}})
        if (!categoria) return undefined
        this.categoriaRepository.merge(categoria, data)
        return this.categoriaRepository.save(categoria)
    }

    async buscarCategoria(id: number): Promise<Categoria | null> {
        return await this.categoriaRepository.findOne({where:{id: id}})
    }

    async eliminarCategoria(id: number): Promise<void> {
        const categoria = await this.categoriaRepository.findOne({where:{id: id}})
        if (categoria) await this.categoriaRepository.remove(categoria)
    }
}
