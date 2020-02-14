import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder } from "typeorm";
import { cobrador } from "src/models/cobrador.entity";
import { gasto } from "src/models/gasto.entity";


@Injectable()
export class cobradorService {

    constructor (
        @Inject('COBRADOR_REPOSITORY') private readonly cobradorRepository: Repository<cobrador>
    ) {}

    async getCobradores(): Promise<cobrador[]> {
        return this.cobradorRepository.find();
    }

    async getCobrador(Id: number): Promise<cobrador> {
        return this.cobradorRepository.findOne(Id);
    }

    async getGastosCobrador(Id:number): Promise<any> {
        const gastosCobrador = createQueryBuilder('cobrador')
        .leftJoinAndSelect("cobrador.gastos", "gasto")
        .where('cobrador.id_cobrador', { id_cobrador: Id}).printSql().getOne();
        return gastosCobrador;
    }

    async setCobrador(cobrador: cobrador) {
        return this.cobradorRepository.save(cobrador);
    }

    async deleteCobrador(cobrador: cobrador) {
        return this.cobradorRepository.delete(cobrador.id_cobrador);
    }
}