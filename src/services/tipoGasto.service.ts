import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder } from "typeorm";
import { tipo_gasto } from "src/models/tipoGasto.entity";

@Injectable()
export class tipoGastoService {
    constructor(
        @Inject('TIPO_GASTO_REPOSITORY') private readonly tipoGastoRepository: Repository<tipo_gasto>
    ) {}

    async getTiposGastos(): Promise<tipo_gasto[]> {
        return this.tipoGastoRepository.find();
    }

    async getTipoGasto(Id: number): Promise<tipo_gasto> {
        return await this.tipoGastoRepository.findOne(Id);
    }

    async getGastosAsociados(Id: number): Promise<any> {
        return await createQueryBuilder('tipo_gasto')
        .leftJoinAndSelect('tipo_gasto.GastosAsociados', 'gasto')
        .where('tipo_gasto.id_tipo_gasto = :Id', { Id: Id })
        .getOne();
       
    }
    async setTipoGasto(tipoGasto: tipo_gasto) {
        return this.tipoGastoRepository.save(tipoGasto);
    }

    async deleteTipoGasto(tipoGasto: tipo_gasto) {
        return this.tipoGastoRepository.delete(tipoGasto.id_tipo_gasto)
    }
}