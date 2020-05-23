import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { usuarios } from "../models/usuarios.entity";
let md5 = require('blueimp-md5');
@Injectable()
export class InicioSesionService {

    constructor (
        @Inject('USUARIOS_REPOSITORY') private readonly usuarioRepo : Repository<usuarios>
    ) {}
    
    async getUsers() : Promise<usuarios[]> {
        return this.usuarioRepo.find();
    }

    async getSesion() : Promise<usuarios[]> {
        return this.usuarioRepo.find();
    }

    async setUser(usuarios: usuarios) {
        this.usuarioRepo.save(usuarios);
    }

    async deleteUsers(usuarios: usuarios) {
        this.usuarioRepo.delete(usuarios.Id);
    }
}
