import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common";
import { tipoGastoService } from "src/services/tipoGasto.service";
import { tipo_gasto } from "src/models/tipoGasto.entity";

@Controller('tipoGasto')
export class tipoGastoController {
    constructor(
        private readonly tipoGastoService: tipoGastoService
    ) { }

    @Get(':Auth')
    async getTipoGastos(@Param() params: any) {
        return params.Auth ? await this.tipoGastoService.getTiposGastos() : null;
    }

    @Get(':Auth/:Id')
    async getTipoGasto(@Param() params: any) {
        return params.Auth && params.Id ? await this.tipoGastoService.getTipoGasto(<number>params.Id) : null;
    }

    @Post(':Auth')
    async setTipoGasto(@Param() params: any, @Body() body: tipo_gasto) {
        return params.Auth && body ? await this.tipoGastoService.setTipoGasto(body) : null;
    }

    @Delete(':Auth')
    async deleteTipoGasto(@Param() params: any, @Body() body: tipo_gasto) {
        return params.Auth && body ? await this.tipoGastoService.deleteTipoGasto(body) : null;
    }

}