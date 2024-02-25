import { Request, Response } from "express";
import { AppDataSource } from "../adapters/db";
import { Vehiculo } from "../infrastructure/vehicle";


export async function crearVehiculo (req: Request, res: Response) {
    try {
        //instancio el repositorio vehiculo para poderlo utilizar
        const vehiculoRepository = AppDataSource.getRepository(Vehiculo)
        //creo la nueva vehiculo apartir de la info en el body de la peticion
        const vehiculo = vehiculoRepository.create(req.body)
        //ejecuto el guardado en la base de datos por medio del ORM
        await vehiculoRepository.save(vehiculo)
        //envio la respuesta exitosa
        res.status(201).json({ mensaje: 'vehiculo creada exitosamente' });

        
    } catch (e) {
        //control de errores
        console.error(e);
        res.status(500).json({mensaje: 'Error al crear vehiculo'})
    }
}

export async function actualizarVehiculo (req: Request, res: Response) {
    try {
        //obtengo el parametro id de la url
        const id = parseInt(req.params.id);
        //creo un objeto repositorio de vehiculo
        const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
        //busco el vehiculo a actualizar
        const vehiculo = await vehiculoRepository.findOne({where: {id: id}});
        //respuesta en caso de que el vehiculo no exista
        if (!vehiculo) return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        //actualizo la informacion del vehiculo
        vehiculoRepository.merge(vehiculo, req.body);
        const vehiculoActualizado = await vehiculoRepository.save(vehiculo);
        //respondo con la informacion actulizada
        res.json(vehiculoActualizado);
    } catch (e) {
        //control de errores
        console.error('Error al actualizar vehículo:', e);
        res.status(500).json({ mensaje: 'Error al actualizar vehículo' });
    }
} 

export async function buscarVehiculo (req: Request, res: Response) {
    try {
        //obtengo el parametro id de la url
        const id = parseInt(req.params.id);
        //creo un objeto repositorio de vehiculo
        const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
        //busco el vehiculo
        const vehiculo = await vehiculoRepository.findOne({where: {id: id}});
        //respuesta en caso de que el vehiculo no exista
        if (!vehiculo) return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        //respondo con el vehiculo encontrado
        res.json(vehiculo);
    } catch (e) {
        //control de errores
        console.error('Error al actualizar vehículo:', e);
        res.status(500).json({ mensaje: 'Error al actualizar vehículo' });
    }
} 

export async function eliminarVehiculo(req: Request, res: Response) {
    try {
        //obtengo el parametro id de la url
        const id = parseInt(req.params.id);
        //creo un objeto repositorio de vehiculo
        const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
        //busco el vehiculo
        const vehiculo = await vehiculoRepository.findOne({where: {id: id}});
        //respuesta en caso de que el vehiculo no exista
        if (!vehiculo) return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        //elimino el vehiculo si existe
        await vehiculoRepository.remove(vehiculo);
        res.json({ mensaje: 'Vehículo eliminado exitosamente' });
    } catch (e) {
        //manejo de errores
        console.error('Error al eliminar vehículo:', e);
        res.status(500).json({ mensaje: 'Error al eliminar vehículo' });
    }
}
