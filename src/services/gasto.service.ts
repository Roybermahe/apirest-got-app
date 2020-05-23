import { Injectable, Inject } from "@nestjs/common";
import { Repository, createQueryBuilder} from "typeorm";
import { gasto } from "src/models/gasto.entity";

@Injectable()
export class gastoService{
    constructor (
        @Inject('GASTO_REPOSITORY') private readonly gastoRepository: Repository<gasto>
    ) {}

    async getGastos(): Promise<gasto[]> {
        return this.gastoRepository.find();
    }

    async getGasto(Id:number): Promise<gasto> {
        return this.gastoRepository.findOne(Id);
    }

    async setGasto(gasto: gasto) {
        return this.gastoRepository.save(gasto);
    }

    async deleteGasto(gasto: gasto) {
        return this.gastoRepository.delete(gasto.id_gasto);
    }
}