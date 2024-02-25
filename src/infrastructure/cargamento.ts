import {Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne, JoinColumn} from 'typeorm'
import { Pedido } from './pedido'
import { Vehiculo } from './vehicle'
import { Conductor } from './conductor'


@Entity('cargamento')
export class Cargamento extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fecha_inicial:Date

    @Column()
    fecha_final:Date

    @OneToMany(() => Pedido, pedido => pedido.cargamento)
    pedidos:Pedido[]

    @ManyToOne(() => Vehiculo, vehiculo => vehiculo.cargamentos)
    @JoinColumn()
    vehiculo: Vehiculo

    @ManyToOne(() => Conductor, conductor => conductor.cargamentos)
    @JoinColumn()
    conductor: Conductor
}