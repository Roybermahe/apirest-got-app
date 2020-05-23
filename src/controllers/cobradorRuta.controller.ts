import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { cobradorRutaService } from "src/services/cobradorRuta.service";
import { cobrador_en_ruta } from "src/models/cobradorRuta.entity";

@Controller('CobradorRutas')
export class cobradorRutasController {
    constructor(
        private readonly cobradorRutaService: cobradorRutaService
    ) {}

    @Get(':Auth')
    async getCobradoresRutas(@Param() params : any) {
        return params.Auth ?  this.cobradorRutaService.ListaCobradoresRutas() : null;
    }

    @Get(':Auth/:Id')
    async getCobradorRutas(@Param() params : any) {
        return params.Auth && params.Id ? this.cobradorRutaService.CobradorRuta(<number>params.Id) : null;
    }

    @Post(':Auth')
    async guardarCobradorRuta(@Param() params : any, @Body() body: cobrador_en_ruta) {
        return params.Auth && body ? this.cobradorRutaService.guardarCobradorEnRuta(body) : null;
    }

    @Put(':Auth')
    async actualizarCobradorRuta(@Param() params : any, @Body() body: cobrador_en_ruta) {
        return params.Auth && body ? this.cobradorRutaService.guardarCobradorEnRuta(body) : null;
    }

    @Delete(':Auth')
    async deleteCobradorRuta(@Param() params : any, @Body() body: cobrador_en_ruta) {
        return params.Auth && body ? this.cobradorRutaService.deleteCobradorEnRuta(body) : null;
    }
}