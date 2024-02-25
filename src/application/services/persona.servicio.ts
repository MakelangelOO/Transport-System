import { AppDataSource } from "../../ports/db"
import { Repository } from "typeorm"
import { Persona } from "../../domain/repositories/persona"

export class PersonaServicio {
    private personaRepository: Repository<Persona>

    constructor() {
        this.personaRepository = AppDataSource.getRepository(Persona)
    }

    async crearPersona(data: Partial<Persona>): Promise<void> {
        const nuevaPersona = this.personaRepository.create(data)
        await this.personaRepository.save(nuevaPersona)
    }

    async actualizarPersona(id: number, data: Partial<Persona>): Promise<Persona | undefined> {
        const persona = await this.personaRepository.findOne({where:{id: id}})
        if (!persona) {
            return undefined
        }
        this.personaRepository.merge(persona, data)
        return this.personaRepository.save(persona)
    }

    async buscarPersona(id: number): Promise<Persona | null> {
        return await this.personaRepository.findOne({where:{id: id}})
    }

    async eliminarPersona(id: number): Promise<void> {
        const persona = await this.personaRepository.findOne({where:{id: id}})
        if (persona) {
            await this.personaRepository.remove(persona)
        }
    }
}
