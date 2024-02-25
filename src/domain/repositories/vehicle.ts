import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from 'typeorm'
import { Cargamento } from './cargamento'


@Entity('vehiculo')
export class Vehiculo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 15})
    modelo: string

    @Column({length: 10})
    marca: string

    @Column({ type: 'float' })
    capacidad: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    fecha_actualizacion: Date

    @OneToMany(() => Cargamento, cargamento => cargamento.vehiculo)
    cargamentos:Cargamento[]

}