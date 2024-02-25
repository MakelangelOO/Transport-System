import { AppDataSource } from "../../ports/db"
import { Repository } from "typeorm"
import { Pedido } from "../../domain/repositories/pedido"

export class PedidoServicio {
    private pedidoRepository: Repository<Pedido>

    constructor () {
        this.pedidoRepository = AppDataSource.getRepository(Pedido)
    }

    async crearPedido(data: Partial<Pedido>): Promise<void> {
        const nuevoPedido = this.pedidoRepository.create(data)
        await this.pedidoRepository.save(nuevoPedido)
    }

    async actualizarPedido(id: number, data: Partial<Pedido>): Promise<Pedido | undefined > {
        const pedido = await this.pedidoRepository.findOne({where: {id: id}})
        if(!pedido) return undefined
        this.pedidoRepository.merge(pedido, data)
        return this.pedidoRepository.save(pedido)
    }

    async buscarPedido(id: number): Promise<Pedido | null> {
        return await this.pedidoRepository.findOne({where: {id: id}})
    }

    async eliminarPedido(id: number): Promise<void> {
        const pedido = await this.pedidoRepository.findOne({where: {id: id}})
        if (pedido) await this.pedidoRepository.remove(pedido)
    }
}