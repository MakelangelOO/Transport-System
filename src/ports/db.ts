import { DataSource } from 'typeorm'
import { env } from '../config'
import { Persona } from '../domain/repositories/persona'
import { Cliente } from '../domain/repositories/cliente'
import { Conductor } from '../domain/repositories/conductor'
import { Cargamento } from '../domain/repositories/cargamento'
import { Categoria } from '../domain/repositories/categoria'
import { Estado } from '../domain/repositories/estado'
import { Pedido } from '../domain/repositories/pedido'
import { Vehiculo } from '../domain/repositories/vehicle'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE.HOST,
    port: env.DATABASE.PORT,
    username: env.DATABASE.USER,
    password: env.DATABASE.PASS,
    database: env.DATABASE.NAME,
    entities: [Persona, Cliente, Conductor, Categoria, Cargamento, Estado, Pedido, Vehiculo],
    logging: false,
    synchronize: true
})