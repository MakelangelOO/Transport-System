import { AppDataSource } from "../../ports/db"
import { Conductor } from "../../domain/repositories/conductor"
import { Repository } from "typeorm"

export class ConductorServicio {
    private conductorRepository: Repository<Conductor>

    constructor(){
        this.conductorRepository = AppDataSource.getRepository(Conductor)
    }

    async crearConductor(data: Partial<Conductor>): Promise<void> {
        const conductor = this.conductorRepository.create(data)
        await this.conductorRepository.save(conductor)
    }

    async actualizarConductor(id: number, data: Partial<Conductor>): Promise<void> {
        const conductor = await this.conductorRepository.findOne({where: {id: id}})
        if (!conductor) {
            throw new Error('conductor no encontrado')
        }
        this.conductorRepository.merge(conductor, data)
        await this.conductorRepository.save(conductor)
    }

    async buscarConductor(id: number): Promise<Conductor | null> {
        return await this.conductorRepository.findOne({where: {id: id}})
    }

    async eliminarConductor(id: number): Promise<void> {
        const conductor = await this.conductorRepository.findOne({where: {id: id}})
        if (!conductor) throw new Error('conductor no encontrado')
        await this.conductorRepository.remove(conductor)
    }

    //este metodo permite consultar cuales son los cargamentos asociados al conductor, a su vez permite saber en que vehiculo esta asignado al cargamento
    async consultarCargasVehiculosAsociados(id: number): Promise<Conductor[] | null> {
        //en la funcion find se pasa como parametro un objeto donde se explica las relaciones que queremos obtener entre tablas, y las calusulas
        const CargasYVehiculos = await this.conductorRepository.find({
            //joins
            relations: {
                //join entre conductor y cargas
                cargamentos: {
                    //join entre carga y vehiculo
                    vehiculo: true
                }
            },
            //condiciones
            where: {id: id}
        })
        //retorno en caso de que no se encuentre ninguna carga para el conductor
        if(!CargasYVehiculos || CargasYVehiculos.length == 0) throw new Error('no se encontro cargas ni registros asociados')
        //retorno respuesta
        return CargasYVehiculos
    }

}