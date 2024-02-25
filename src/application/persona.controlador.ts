import { Request, Response } from "express";
import { Persona } from "../infrastructure/persona";
import { AppDataSource } from "../adapters/db";


export async function crearPersona (req: Request, res: Response) {
    try {
        //instancio el repositorio persona para poderlo utilizar
        const personaRepository = AppDataSource.getRepository(Persona)
        //creo la nueva persona apartir de la info en el body de la peticion
        const persona = personaRepository.create(req.body)
        //ejecuto el guardado en la base de datos por medio del ORM
        await personaRepository.save(persona)
        //envio la respuesta exitosa
        res.status(201).json({ mensaje: 'Persona creada exitosamente' });

        
    } catch (e) {
        //control de errores
        console.error(e);
        res.status(500).json({mensaje: 'Error al crear persona'})
    }
}

export async function actualizarPersona (req: Request, res: Response) {
    try {
        //obtengo el parametro id de la url
        const id = parseInt(req.params.id);
        //creo un objeto repositorio de persona
        const vehiculoRepository = AppDataSource.getRepository(Persona);
        //busco la persona a actualizar
        const vehiculo = await vehiculoRepository.findOne({where: {id: id}});
        //respuesta en caso de que la persona no exista
        if (!vehiculo) return res.status(404).json({ mensaje: 'persona no encontrado' });
        //actualizo la informacion de la persona
        vehiculoRepository.merge(vehiculo, req.body);
        const vehiculoActualizado = await vehiculoRepository.save(vehiculo);
        //respondo con la informacion actulizada
        res.json(vehiculoActualizado);
    } catch (e) {
        //control de errores
        console.error('Error al actualizar persona:', e);
        res.status(500).json({ mensaje: 'Error al actualizar persona' });
    }
} 

export async function buscarPersona (req: Request, res: Response) {
    try {
        //obtengo el parametro id de la url
        const id = parseInt(req.params.id);
        //creo un objeto repositorio de la persona
        const vehiculoRepository = AppDataSource.getRepository(Persona);
        //busco la persona
        const vehiculo = await vehiculoRepository.findOne({where: {id: id}});
        //respuesta en caso de que la persona no exista
        if (!vehiculo) return res.status(404).json({ mensaje: 'persona no encontrado' });
        //respondo con la persona encontrado
        res.json(vehiculo);
    } catch (e) {
        //control de errores
        console.error('Error al actualizar persona:', e);
        res.status(500).json({ mensaje: 'Error al actualizar persona' });
    }
} 

export async function eliminarPersona(req: Request, res: Response) {
    try {
        //obtengo el parametro id de la url
        const id = parseInt(req.params.id);
        //creo un objeto repositorio de la persona
        const vehiculoRepository = AppDataSource.getRepository(Persona);
        //busco el vehiculo
        const vehiculo = await vehiculoRepository.findOne({where: {id: id}});
        //respuesta en caso de que la persona no exista
        if (!vehiculo) return res.status(404).json({ mensaje: 'persona no encontrado' });
        //elimino la persona si existe
        await vehiculoRepository.remove(vehiculo);
        res.json({ mensaje: 'persona eliminado exitosamente' });
    } catch (e) {
        //manejo de errores
        console.error('Error al eliminar vehículo:', e);
        res.status(500).json({ mensaje: 'Error al eliminar persona' });
    }
}
