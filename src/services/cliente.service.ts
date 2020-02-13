import { Injectable, Inject } from "@nestjs/common";
import { Repository, ObjectID } from "typeorm";
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

    async setCliente(clientes: cliente) {
        return this.clientesRepo.save(clientes);
    }

    async deleteCliente(clientes: cliente) {
        return this.clientesRepo.delete(clientes.id_cliente);
    }
}