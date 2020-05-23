import { Controller, Inject, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { abonoService } from "src/services/abono.service";
import { abono } from "src/models/abono.entity";

@Controller('Abonos')
export class abonoController {
    constructor (
        private readonly abonoService: abonoService
    ) {}

    @Get(':Auth')
    async obtenerAbonos(@Param() params: any) {
        return params.Auth ? await this.abonoService.getAbonos() : null;
    }

    @Get(':Auth/:Id')
    async obtenerAbono(@Param() params: any) {
        return params.Auth && params.Id ? await this.abonoService.getAbono(<number>params.Id) : null;
    }

    @Post(':Auth')
    async guardarAbono(@Param() params: any,@Body() body: abono) {
        return params.Auth && body ? await this.abonoService.setAbono(body) : null;
    }

    @Put(':Auth')
    async actualizarAbono(@Param() params: any,@Body() body: abono) {
        return params.Auth && body ? await this.abonoService.setAbono(body) : null;
    }

    @Delete(':Auth')
    async deleteAbono(@Param() params: any, @Body() body: abono) {
        return params.Auth && body ? await this.abonoService.deleteAbono(body) : null;
    }
}

