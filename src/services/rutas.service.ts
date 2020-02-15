import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder } from "typeorm";
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

    async getClienteEnRutas(Id: number) {
        return await createQueryBuilder('ruta')
        .leftJoinAndSelect('ruta.clienteRutas','clientes_en_ruta')
        .where('ruta.id_ruta', { id_ruta: Id }).getOne();
    }

    async getCobradorEnRutas(Id: number) {
        return await createQueryBuilder('ruta')
        .leftJoinAndSelect('ruta.cobradorRutas','cobrador_en_ruta')
        .where('ruta.id_ruta', { id_ruta: Id }).getOne();
    }

    async setRuta(ruta: ruta) {
        return this.rutaRepository.save(ruta);
    }

    async deleteRuta(ruta: ruta) {
        return this.rutaRepository.delete(ruta.id_ruta);
    }
}