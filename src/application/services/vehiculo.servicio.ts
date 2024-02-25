import { AppDataSource } from "../../ports/db"
import { Vehiculo } from "../../domain/repositories/vehicle"

export class VehiculoServicio {
    private vehiculoRepository = AppDataSource.getRepository(Vehiculo)

    async crearVehiculo(data: Partial<Vehiculo>): Promise<void> {
        const vehiculo = this.vehiculoRepository.create(data)
        await this.vehiculoRepository.save(vehiculo)
    }

    async actualizarVehiculo(id: number, data: Partial<Vehiculo>): Promise<void> {
        const vehiculo = await this.vehiculoRepository.findOne({where: {id: id}})
        if (!vehiculo) {
            throw new Error('Vehículo no encontrado')
        }
        this.vehiculoRepository.merge(vehiculo, data)
        await this.vehiculoRepository.save(vehiculo)
    }

    async buscarVehiculo(id: number): Promise<Vehiculo | null> {
        return await this.vehiculoRepository.findOne({where: {id: id}})
    }

    //metodo para eliminar el vehiculo
    async eliminarVehiculo(id: number): Promise<void> {
        const vehiculo = await this.vehiculoRepository.findOne({where: {id: id}})
        if (!vehiculo) throw new Error('Vehículo no encontrado')
        await this.vehiculoRepository.remove(vehiculo)
    }

    //esta funcion me permite obtener los vehiculos disponibles para realizar cargamentos
    async obtenerVehiculosDisponibles(): Promise<Vehiculo[] | null> {
        //obtengo fecha actual
        const fechaActual = new Date()
        //obtengo los vehiculos con sus cargamentos
        let vehiculos = await this.vehiculoRepository.find({relations:{cargamentos:true}})
        vehiculos = vehiculos.filter(vehiculo => {
            // Filtra los vehículos que no tienen cargamentos o cuya fecha final de todos los cargamentos es menor que la fecha actual
            return vehiculo.cargamentos.length === 0 || vehiculo.cargamentos.every(cargamento => cargamento.fecha_final < fechaActual);
        })
        //respuesta en caso de no haber vehiculos disponibles
        if(!vehiculos || vehiculos.length == 0) throw new Error("no hay registros")
        return vehiculos
    }
}
