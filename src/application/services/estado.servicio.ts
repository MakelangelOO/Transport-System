import { AppDataSource } from "../../ports/db"
import { Repository } from "typeorm"
import { Estado } from "../../domain/repositories/estado"

export class EstadoServicio {
    private estadoRepository: Repository<Estado>

    constructor () {
        this.estadoRepository = AppDataSource.getRepository(Estado)
    }

    async crearEstado(data: Partial<Estado>): Promise<void> {
        const nuevoEstado = this.estadoRepository.create(data)
        await this.estadoRepository.save(nuevoEstado)
    }

    async actualizarEstado(id: number, data: Partial<Estado>): Promise<Estado | undefined> {
        const estado = await this.estadoRepository.findOne({where:{id: id}})
        if (!estado) {
            return undefined
        }
        this.estadoRepository.merge(estado, data)
        return this.estadoRepository.save(estado)
    }

    async buscarEstado(id: number): Promise<Estado | null> {
        return await this.estadoRepository.findOne({where:{id: id}})
    }

    async eliminarEstado(id: number): Promise<void> {
        const estado = await this.estadoRepository.findOne({where:{id: id}})
        if (estado) {
            await this.estadoRepository.remove(estado)
        }
    }
}