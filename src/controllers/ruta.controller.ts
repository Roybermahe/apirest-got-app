import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { rutaService } from "src/services/rutas.service";
import { ruta } from "src/models/ruta.entity";

@Controller('rutas')
export class rutaController {
    constructor(private readonly rutaService: rutaService) {}

    @Get(':Auth')
    async getRutas(@Param() params: any) {
        return params.Auth ? this.rutaService.getRutas() : null;
    }

    @Get(':Auth/:Id')
    async getRuta(@Param() params: any) {
        return params.Auth && params.Id ? this.rutaService.getRuta(<number>params.Id) : null;
    }

    @Get('ClientesRutas/:Auth/:Id')
    async getClientesRutas(@Param() params: any) {
        return params.Auth && params.Id ? await this.rutaService.getClienteEnRutas(params.Id) : null;
    }

    @Get('CobradoresRutas/:Auth/:Id')
    async getCobradoresRutas(@Param() params: any) {
        return params.Auth && params.Id ? await this.rutaService.getCobradorEnRutas(params.Id) : null;
    }

    @Post(':Auth')
    async GuardarRuta(@Param() params: any, @Body() ruta: ruta) {
        return params.Auth ? this.rutaService.setRuta(ruta) : null;
    }

    @Put(':Auth')
    async setRuta(@Param() params: any, @Body() ruta: ruta) {
        return params.Auth ? this.rutaService.setRuta(ruta) : null;
    }

    @Delete(':Auth')
    async deleteRuta(@Param() params: any, @Body() ruta: ruta) {
        return params.Auth ? this.rutaService.deleteRuta(ruta) : null;
    }

}