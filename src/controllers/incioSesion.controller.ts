import { Controller, Param, Post, Put, Body, Delete, Get } from "@nestjs/common";
import { InicioSesionService } from "../services/InicioSesion.service";
import { usuarios } from "src/models/usuarios.entity";
let md5 = require('blueimp-md5');

@Controller('InicioSesion')
export class InicioSesion {
    constructor(private readonly sesion: InicioSesionService) { }

    @Get()
    async getUsuarios() {
        return this.sesion.getUsers();
    }

    @Post()
    async getSesion(@Body() peticion: usuarios) {
        let usuario = (await this.sesion.getSesion()).filter(item => item.Pass === peticion.Pass && item.User === peticion.User);
        return usuario.length == 1 ? { token: md5("TOKENID_USUARIO_NUMBER_" + usuario + "-TOK-"), Id: usuario[0].Id } : '';
    }

    @Put()
    async setUser(@Body() usuario: usuarios) {
        this.sesion.setUser(usuario);
    }

    @Delete()
    async deleteUser(@Body() usuario: usuarios) {
        this.sesion.deleteUsers(usuario);
    }
}
