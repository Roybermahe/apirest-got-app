import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { cliente_en_ruta } from "src/models/clienteRuta.entity";

@Injectable()
export class clientesRutaService {
    constructor (
        @Inject('CLIENTE_RUTA_REPOSITORY') private readonly  clienteRutaRepository: Repository<cliente_en_ruta>
    ) {}

    async getClientesRuta(): Promise<cliente_en_ruta[]> {
        return await this.clienteRutaRepository.find(); 
    }

    async getClienteRuta(Id: number): Promise<cliente_en_ruta> {
        return await this.clienteRutaRepository.findOne(Id); 
    }

    async setCliente(clienteRuta: cliente_en_ruta) {
        return await this.clienteRutaRepository.save(clienteRuta);
    }

    async deleteCliente(clienteRuta: cliente_en_ruta) {
        return await this.clienteRutaRepository.delete(clienteRuta.id_cliente_en_ruta)
    }
}