import {Column, Entity, PrimaryGeneratedColumn,  BaseEntity, OneToMany } from 'typeorm'
import { Conductor } from './conductor'


@Entity('categoria')
export class Categoria extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 3})
    nombre: string

    @OneToMany(() => Conductor, conductor => conductor.categoria)
    conductores:Conductor[]
}