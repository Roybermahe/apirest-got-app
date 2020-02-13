import { Controller, Get, Param, Post, Body, Put, Delete} from "@nestjs/common";
import { clienteService } from "src/services/cliente.service";
import { cliente } from "src/models/cliente.entity";


@Controller('Clientes')
export class clientesController {

    constructor(
        private readonly clienteService: clienteService
    ) {}

    @Get(':Auth')
    getClientes(@Param() params: any) {
        return params.Auth ? this.clienteService.getClientes(): null;
    }

    @Get(':Auth/:Id')
    getCliente(@Param() params: any) {
        return params.Auth && params.Id ? this.clienteService.getCliente(<number>params.Id) : null; 
    }

    @Post(':Auth')
    postClientes(@Param() params: any, @Body() cliente: cliente) {
        return params.Auth ? this.clienteService.setCliente(cliente): null;
    }

    @Put(':Auth')
    putClientes(@Param() params: any, @Body() cliente: cliente) {
        return params.Auth ? this.clienteService.setCliente(cliente): null;
    }

    @Delete(':Auth')
    deleteClientes(@Param() params: any, @Body() cliente: cliente) {
        return params.Auth ? this.clienteService.deleteCliente(cliente): null;
    }

}