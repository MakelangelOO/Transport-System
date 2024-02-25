import { DataSource } from 'typeorm'
import { env } from '../config'
import { Persona } from '../infrastructure/persona'
import { Cliente } from '../infrastructure/cliente'
import { Conductor } from '../infrastructure/conductor'
import { Cargamento } from '../infrastructure/cargamento'
import { Categoria } from '../infrastructure/categoria'
import { Estado } from '../infrastructure/estado'
import { Pedido } from '../infrastructure/pedido'
import { Vehiculo } from '../infrastructure/vehicle'

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