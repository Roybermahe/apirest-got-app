import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { abono } from "src/models/abono.entity";

@Injectable()
export class abonoService {
    constructor (
        @Inject('ABONO_REPOSITORY') private readonly abonoRepository: Repository<abono>
    ) {}

    async getAbonos(): Promise<abono[]> {
        return await this.abonoRepository.find();
    }

    async getAbono(Id: number): Promise<abono> {
        return await this.abonoRepository.findOne(Id);
    }

    async setAbono(abono: abono) {
        return await this.abonoRepository.save(abono);
    }

    async deleteAbono(abono: abono) {
        return await this.abonoRepository.delete(abono);
    }
}