import {Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { Pedido } from './pedido'


@Entity('estado_pedido')
export class Estado extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 10})
    nombre: string

    @OneToMany(() => Pedido, pedido => pedido.cargamento)
    pedidos:Pedido[]
}