import "reflect-metadata"
import app from "../app"
import { env } from "../config"
import {AppDataSource} from '../ports/db'

async function main() {
    try{
        AppDataSource.initialize()
        console.log('database connected')
        app.listen( env.APP.PORT )
        console.log('server is runing on port', env.APP.PORT)
    }catch(e) {
        console.error(e)
        
    }
}

main()