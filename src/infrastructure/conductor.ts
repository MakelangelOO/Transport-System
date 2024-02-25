import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { Persona } from './persona';
import { Cargamento } from './cargamento';
import { Categoria } from './categoria';


@Entity('conductor')
export class Conductor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    categoria_superior_pase: number

    @Column()
    vigencia_pase: Date;

    @Column({default: true})
    actualmente_trabajando: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    fecha_actualizacion: Date

    @OneToOne(() => Persona, persona => persona.conductor)
    @JoinColumn()
    persona: Persona

    @OneToMany(() => Cargamento, cargamento => cargamento.conductor)
    cargamentos: Cargamento[]

    @ManyToOne(() => Categoria, categoria => categoria.conductores)
    @JoinColumn()
    categoria: Categoria
}