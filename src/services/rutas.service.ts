import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { ruta } from "src/models/ruta.entity";

@Injectable()
export class rutaService {
    constructor(
        @Inject('RUTA_REPOSITORY') private readonly rutaRepository: Repository<ruta>
    ) {}

    async getRutas(): Promise<ruta[]> {
        return this.rutaRepository.find()
    }

    async getRuta(Id: number) : Promise<ruta> {
        return (await this.rutaRepository.find()).find(rutaItem => rutaItem.id_ruta == Id);
    }

    async setRuta(ruta: ruta) {
        return this.rutaRepository.save(ruta);
    }

    async deleteRuta(ruta: ruta) {
        return this.rutaRepository.delete(ruta.id_ruta);
    }
}