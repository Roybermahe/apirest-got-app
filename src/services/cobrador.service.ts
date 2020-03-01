import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder } from "typeorm";
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
        return this.cobradorRepository.findOne(Id);
    }

    async getGastosCobrador(Id:number): Promise<any> {
        const gastosCobrador = createQueryBuilder('cobrador')
        .leftJoinAndSelect("cobrador.gastos", "gasto")
        .where('cobrador.id_cobrador = :Id', { Id: Id}).getOne();
        return gastosCobrador;
    }

    async AbonosRelacionados(Id: number): Promise<any> {
        return await createQueryBuilder('cobrador')
        .leftJoinAndSelect('cobrador.abonos', 'abono')
        .where('cobrador.id_cobrador = :Id', { Id: Id })
        .getOne();
    }

    async CreditosRelacionados(Id: number): Promise<any> {
        return await createQueryBuilder('cobrador')
        .leftJoinAndSelect('cobrador.creditos', 'credito')
        .where('cobrador.id_cobrador = :Id', { Id: Id })
        .getOne();
    }

    async getCobradorRutas(Id:number): Promise<any> {
        const rutasCobrador = createQueryBuilder('cobrador')
        .leftJoinAndSelect("cobrador.rutas", "cobrador_en_ruta")
        .where('cobrador.id_cobrador = :Id', { Id: Id}).getOne();
        return rutasCobrador;
    }

    async setCobrador(cobrador: cobrador) {
        return this.cobradorRepository.save(cobrador);
    }

    async deleteCobrador(cobrador: cobrador) {
        return this.cobradorRepository.delete(cobrador.id_cobrador);
    }
}