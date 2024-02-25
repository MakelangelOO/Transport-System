import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne } from 'typeorm'
import { Cliente } from './cliente'
import { Conductor } from './conductor'


@Entity('persona')
export class Persona extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 40})
	nombre_completo: string

    @Column({length: 11})
	numero_identificacion: string

    @Column({length: 3})
	edad: string

    @Column({length: 13})
	telefono: string

    @Column({length: 40})
	correo: string

    @Column({length: 30})
	direccion: string 

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    fecha_actualizacion: Date

    @OneToOne(() => Cliente, cliente => cliente.persona)
    cliente: Cliente

    @OneToOne(() => Conductor, conductor => conductor.persona)
    conductor: Conductor
}