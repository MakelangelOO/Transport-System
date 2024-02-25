import { AppDataSource } from "../../ports/db"
import { Repository } from "typeorm"
import { Cargamento } from "../../domain/repositories/cargamento"


export class CargamentoServicio {
    private cargamentoRepository: Repository<Cargamento>

    constructor () {
        this.cargamentoRepository = AppDataSource.getRepository(Cargamento)
    }

    async crearCargamento(data: Partial<Cargamento>): Promise<void> {
        const nuevoCargamento = this.cargamentoRepository.create(data)
        await this.cargamentoRepository.save(nuevoCargamento)
    }
    
    async actualizarCargamento(id: number, data: Partial<Cargamento>): Promise<Cargamento | undefined> {
        const cargamento = await this.cargamentoRepository.findOne({where:{id: id}})
        if (!cargamento) return undefined
        this.cargamentoRepository.merge(cargamento, data)
        return this.cargamentoRepository.save(cargamento)
    }

    async buscarCargamento(id: number): Promise<Cargamento | null> {
        return await this.cargamentoRepository.findOne({where:{id: id}})
    }

    async eliminarCargamento(id: number): Promise<void> {
        const cargamento = await this.cargamentoRepository.findOne({where:{id: id}})
        if (cargamento) await this.cargamentoRepository.remove(cargamento)
    }
}