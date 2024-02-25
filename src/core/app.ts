
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import personaRouter from '../routes/persona.ruta'
import vehiculoRouter from '../routes/vehiculo.ruta'


const app = express()

app.use(morgan('dev')) //morgan allows me to visualize the requests made to the server, it is a tool to help in the development.
app.use(cors()) //cors allows you to manage the configuration and connection to other servers.

app.use(express.json())

app.use(personaRouter)
app.use(vehiculoRouter)


export default app