import "reflect-metadata"
import app from "./app"
import { env } from "../config"
import {AppDataSource} from '../adapters/db'

async function main() {
    try{
        AppDataSource.initialize()
        console.log('database connected');
        app.listen( env.APP.PORT )//execution of the App on port 3000
        console.log('server is runing on port', env.APP.PORT)
    }catch(e) {
        console.error(e);
        
    }
}

main()