import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { 
    usuariosProviders,
    clientesProviders 
} from "./Entitys.providers";

@Module({
    providers: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders
    ],
})

export class DatabaseModule {
    
}