import { Controller, Get, Param, Post, Body, Put, Delete} from "@nestjs/common";
import { clienteService } from "src/services/cliente.service";
import { cliente } from "src/models/cliente.entity";


@Controller('Clientes')
export class clientesController {

    constructor(
        private readonly clienteService: clienteService
    ) {}

    @Get(':Auth')
    async getClientes(@Param() params: any) {
        return params.Auth ? await this.clienteService.getClientes(): null;
    }

    @Get(':Auth/:Id')
    async getCliente(@Param() params: any) {
        return params.Auth && params.Id ? await this.clienteService.getCliente(<number>params.Id) : null; 
    }

    @Get('ClientesRutas/:Auth/:Id')
    async getClientesRutas(@Param() params: any) {
        return params.Auth && params.Id ? await this.clienteService.getClienteEnRutas(params.Id) : null;
    }

    @Get('CreditosAsociados/:Auth/:Id')
    async getCreditosAsociados(@Param() params: any) {
        return params.Auth && params.Id ? await this.clienteService.creditosAsociados(params.Id) : null;
    }

    @Post(':Auth')
    async postClientes(@Param() params: any, @Body() cliente: cliente) {
        return params.Auth ? await this.clienteService.setCliente(cliente): null;
    }

    @Put(':Auth')
    async putClientes(@Param() params: any, @Body() cliente: cliente) {
        return params.Auth ? await this.clienteService.setCliente(cliente): null;
    }

    @Delete(':Auth')
    async deleteClientes(@Param() params: any, @Body() cliente: cliente) {
        return params.Auth ? await this.clienteService.deleteCliente(cliente): null;
    }

}