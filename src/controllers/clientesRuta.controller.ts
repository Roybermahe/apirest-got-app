import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { clientesRutaService } from "src/services/clientesRuta.service";
import { cliente_en_ruta } from "src/models/clienteRuta.entity";

@Controller('ClientesEnRuta')
export class clientesRutaController {
    constructor(
        private readonly clientesRutaService: clientesRutaService
    ) {}

    @Get(':Auth')
    async getClientesRuta(@Param() params: any) {
        return params.Auth ? await this.clientesRutaService.getClientesRuta() : null;
    }

    @Get(':Auth/:Id')
    async getClienteRuta(@Param() params: any) {
        return params.Auth && params.Id ? await this.clientesRutaService.getClienteRuta(<number>params.Id) : null;
    }

    @Post(':Auth')
    async guardarClienteRuta(@Param() params: any, @Body() body: cliente_en_ruta) {
        return params.Auth && body ? await this.clientesRutaService.setCliente(body) : null;
    }

    @Put(':Auth')
    async setClienteRuta(@Param() params: any, @Body() body: cliente_en_ruta) {
        return params.Auth && body ? await this.clientesRutaService.setCliente(body) : null;
    }

    @Delete(':Auth')
    async deleteClienteRuta(@Param() params: any, @Body() body: cliente_en_ruta) {
        return params.Auth && body ? await this.clientesRutaService.setCliente(body) : null;
    }

}