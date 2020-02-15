import { Controller, Param, Get, Post, Body, Put, Delete } from "@nestjs/common";
import { cobradorService } from "src/services/cobrador.service";
import { cobrador } from "src/models/cobrador.entity";
import { gastoService } from "src/services/gasto.service";

@Controller('Cobradores')
export class cobradoresController {
    constructor (
        private readonly cobradorService: cobradorService
    ) {}

    @Get(':Auth')
    async getCobradores(@Param() params: any) {
        return params.Auth ? await this.cobradorService.getCobradores() : null;
    }

    @Get(':Auth/:Id') 
    async getCobrador(@Param() params : any) {
        return params.Auth && params.Id ? await this.cobradorService.getCobrador(<number>params.Id): null;
    }

    @Get('Gastos/:Auth/:Id') 
    async getGastosCobrador(@Param() params : any) {
        return params.Auth && params.Id ? this.cobradorService.getGastosCobrador(<number>params.Id) : null;
    } 

    @Get('EnRutas/:Auth/:Id') 
    async getCobradorEnRutas(@Param() params : any) {
        return params.Auth && params.Id ? this.cobradorService.getCobradorRutas(<number>params.Id) : null;
    } 

    @Post(':Auth')
    async postCobrador(@Param() params: any, @Body() cobrador: cobrador) {
        return params.Auth ? this.cobradorService.setCobrador(cobrador): null;
    }

    @Put(':Auth')
    async putCobrador(@Param() params: any, @Body() cobrador: cobrador) {
        return params.Auth ? this.cobradorService.setCobrador(cobrador): null;
    }

    @Delete(':Auth')
    async deleteCobrador(@Param() params: any, @Body() cobrador: cobrador) {
        return params.Auth ? this.cobradorService.deleteCobrador(cobrador) : null;
    }
}