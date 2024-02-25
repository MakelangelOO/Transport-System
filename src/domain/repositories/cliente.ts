import {BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Persona } from './persona'
import { Pedido } from './pedido'

@Entity('cliente')
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 7}) 
    rol: string

    @OneToOne(() => Persona, persona => persona.cliente)
    @JoinColumn()
    persona: Persona

    @OneToMany(() => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[]
}