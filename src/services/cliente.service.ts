import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder } from "typeorm";
import { cliente } from "src/models/cliente.entity";

@Injectable()
export class clienteService {
    constructor(
        @Inject('CLIENTES_REPOSITORY') private readonly clientesRepo: Repository<cliente> 
    ) {}

    async getClientes(): Promise<cliente[]> {
        return this.clientesRepo.find();
    }

    async getCliente(Id: number): Promise<cliente> {
        return (await this.clientesRepo.find()).find(item => item.id_cliente == Id);
    }

    async getClienteEnRutas(Id: number) {
        return await createQueryBuilder('cliente')
        .leftJoinAndSelect('cliente.clientesRuta','clientes_en_ruta')
        .where('cliente.id_cliente = :Id', { Id: Id }).getOne();
    }

    async setCliente(clientes: cliente) {
        return this.clientesRepo.save(clientes);
    }

    async deleteCliente(clientes: cliente) {
        return this.clientesRepo.delete(clientes.id_cliente);
    }
}