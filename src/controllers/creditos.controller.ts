import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { creditoService } from "src/services/creditos.service";
import { credito } from "src/models/credito.entity";
import { ApiParam } from "@nestjs/swagger";

@Controller('Creditos')
export class creditosController {
    constructor (
        private readonly creditoService: creditoService
    ) {}

    @Get(':Auth')
    async getCreditos(@Param() params : any) {
        return params.Auth ? await this.creditoService.getCreditos() : null;
    }

    @Get(':Auth/:Id')
    async getCredito(@Param() params : any) {
        return params.Auth && params.Id ? await this.creditoService.getCredito(<number>params.Id) : null;
    }

    @Get('AbonosAsociados/:Auth/:Id')
    async getAbonosAsociados(@Param() params : any) {
        return params.Auth && params.Id ? await this.creditoService.AbonosRelacionados(<number>params.Id) : null;
    }

    @Get('clientesAsociados/:Auth')
    async getClientesAsociados(@Param() params : any) {
        return params.Auth ? await this.creditoService.creditosClienteRelacionados() : null;
    }

    @Post(':Auth')
    async guardarCredito(@Param() params : any, @Body() body: credito) {
        return params.Auth && body ? await this.creditoService.setCredito(body) : null;
    }

    @Put(':Auth')
    async actualizarcredito(@Param() params : any, @Body() body: credito) {
        return params.Auth && body ? await this.creditoService.setCredito(body) : null;
    }

    @Delete(':Auth/:Id')
    async deleteCredito(@Param() params : any) {
        return params.Auth && params.Id ? await this.creditoService.deleteCredito(params.Id) : null;
    }
}