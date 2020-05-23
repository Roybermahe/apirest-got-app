import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { cobrador_en_ruta } from "src/models/cobradorRuta.entity";

@Injectable()
export class cobradorRutaService {
    constructor(
        @Inject('COBRADOR_RUTA_REPOSITORY') private readonly cobradorRutaRepository: Repository<cobrador_en_ruta>
    ) {}

    async ListaCobradoresRutas(): Promise<cobrador_en_ruta[]> {
        return await this.cobradorRutaRepository.find();
    }

    async CobradorRuta(Id: number): Promise<cobrador_en_ruta> {
        return await this.cobradorRutaRepository.findOne(Id);
    }

    async guardarCobradorEnRuta(cobradorRuta: cobrador_en_ruta): Promise<cobrador_en_ruta> {
        return await this.cobradorRutaRepository.save(cobradorRuta);
    }
    
    async deleteCobradorEnRuta(cobradorRuta: cobrador_en_ruta) {
        return await this.cobradorRutaRepository.delete(cobradorRuta.id_cobrador_en_ruta);
    }
    
}