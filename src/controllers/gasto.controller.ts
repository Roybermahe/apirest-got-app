import { Controller, Post, Get, Param, Body, Put, Delete } from "@nestjs/common";
import { gastoService } from "src/services/gasto.service";
import { gasto } from "src/models/gasto.entity";

@Controller('Gasto')
export class gastoController {
    constructor(
        private readonly gastoService: gastoService
    ) {}

    @Get(':Auth')
    async getGastos(@Param() params: any) {
        return params.Auth ? await this.gastoService.getGastos() : null;
    }

    @Get(':Auth/:Id')
    async getGasto(@Param() params: any) {
        return params.Auth && params.Id ? await this.gastoService.getGasto(<number>params.Id) : null;
    }

    @Post(':Auth')
    async guardarGasto(@Param() params: any, @Body() body: gasto) {
        return params.Auth && body ? await this.gastoService.setGasto(body): null;
    }

    @Put(':Auth')
    async putGasto(@Param() params: any, @Body() body: gasto) {
        return params.Auth && body ? await this.gastoService.setGasto(body): null;
    }

    @Delete(':Auth')
    async deleteGasto(@Param() params: any, @Body() body: gasto) {
        return params.Auth && body ? await this.gastoService.deleteGasto(body): null;
    }
}