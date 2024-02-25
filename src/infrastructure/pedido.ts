import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, JoinColumn, ManyToOne } from 'typeorm'
import { Cliente } from './cliente'
import { Cargamento } from './cargamento'
import { Estado } from './estado'


@Entity('pedido')
export class Pedido extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 20})
    tipo_pedido: string

    @Column({length: 40})
    direccion_salida: string

    @Column({length: 40})
    direccion_llegada: string

    @Column()
    fecha_hora_entrega: Date

    @Column()
    status: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    fecha_actualizacion: Date

    @ManyToOne(() => Cliente, cliente => cliente.pedidos)
    @JoinColumn()
    cliente: Cliente

    @ManyToOne(() => Cargamento, cargamento => cargamento.pedidos)
    @JoinColumn()
    cargamento: Cargamento

    @ManyToOne(() => Estado, estado => estado.pedidos)
    @JoinColumn()
    estado: Estado
}