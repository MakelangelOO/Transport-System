
import express from 'express'
import morgan from 'morgan'
import cargamentoRouter from './adapters/http/routes/cargamento.ruta'
import categoriaRouter from './adapters/http/routes/categoria.ruta'
import clienteRouter from './adapters/http/routes/cliente.ruta'
import conductorRouter from './adapters/http/routes/conductor.ruta'
import estadoRouter from './adapters/http/routes/estado.ruta'
import pedidoRouter from './adapters/http/routes/pedido.ruta'
import personaRouter from './adapters/http/routes/persona.ruta'
import vehiculoRouter from './adapters/http/routes/vehiculo.ruta'

const app = express()

app.use(morgan('dev')) //morgan permite visualizar las peticiones que entrar al servidor, configurada mas para desarrollo

app.use(express.json())

app.use(cargamentoRouter)
app.use(categoriaRouter)
app.use(clienteRouter)
app.use(conductorRouter)
app.use(estadoRouter)
app.use(pedidoRouter)
app.use(personaRouter)
app.use(vehiculoRouter)


export default app