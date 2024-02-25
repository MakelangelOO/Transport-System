import { AppDataSource } from "../../ports/db"
import { Repository } from "typeorm"
import { Cliente } from "../../domain/repositories/cliente"

export class ClienteServicio {
    private clienteRepository: Repository<Cliente>

    constructor() {
        this.clienteRepository = AppDataSource.getRepository(Cliente)
    }

    async crearCliente(data: Partial<Cliente>): Promise<void> {
        const nuevoCliente = this.clienteRepository.create(data)
        await this.clienteRepository.save(nuevoCliente)
    }

    async actualizarCliente(id: number, data: Partial<Cliente>): Promise<Cliente | undefined> {
        const cliente = await this.clienteRepository.findOne({where:{id: id}})
        if (!cliente) return undefined
        this.clienteRepository.merge(cliente, data)
        return this.clienteRepository.save(cliente)
    }

    async buscarCliente(id: number): Promise<Cliente | null> {
        return await this.clienteRepository.findOne({where:{id: id}})
    }

    async eliminarCliente(id: number): Promise<void> {
        const cliente = await this.clienteRepository.findOne({where:{id: id}})
        if (cliente) await this.clienteRepository.remove(cliente)
    }
}
