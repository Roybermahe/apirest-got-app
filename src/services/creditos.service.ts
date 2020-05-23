import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder, ObjectID } from "typeorm";
import { credito } from "src/models/credito.entity";

@Injectable()
export class creditoService {
    constructor (
        @Inject('CREDITO_REPOSITORY') private readonly creditoRepository: Repository<credito>
    ) {}

    async getCreditos(): Promise<credito[]> {
        return await this.creditoRepository.find();
    }

    async getCredito(Id: number): Promise<credito> {
        return await this.creditoRepository.findOne(Id);
    }

    async AbonosRelacionados(Id: number): Promise<any> {
        return await createQueryBuilder('credito')
        .leftJoinAndSelect('credito.Abonos', 'abono')
        .where('credito.id_credito = :Id', { Id: Id })
        .getOne();
    }

    async creditosClienteRelacionados(): Promise<any> {
        return await createQueryBuilder('credito')
        .innerJoinAndSelect('credito.ClienteCredito', 'cliente')
        .where('credito.id_credito = :Id', { Id: 2 })
        .getOne();
    }

    async setCredito(credito: credito) {
        return await this.creditoRepository.save(credito);
    }

    async deleteCredito(Id: number) {
        let creditos: credito[] = [];
        creditos.push((await this.getCredito(Id)));
        return await this.creditoRepository.remove(creditos);
    }
}