import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { cobrador } from "src/models/cobrador.entity";


@Injectable()
export class cobradorService {

    constructor (
        @Inject('COBRADOR_REPOSITORY') private readonly cobradorRepository: Repository<cobrador>
    ) {}

    async getCobradores(): Promise<cobrador[]> {
        return this.cobradorRepository.find();
    }

    async getCobrador(Id: number): Promise<cobrador> {
        return (await this.cobradorRepository.find())
        .find( cobradorItem => cobradorItem.id_cobrador == Id);
    }

    async setCobrador(cobrador: cobrador) {
        return this.cobradorRepository.save(cobrador);
    }

    async deleteCobrador(cobrador: cobrador) {
        return this.cobradorRepository.delete(cobrador.id_cobrador);
    }
}