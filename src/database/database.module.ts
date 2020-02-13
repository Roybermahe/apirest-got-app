import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { 
    usuariosProviders,
    clientesProviders,
    cobradorProviders 
} from "./Entitys.providers";

@Module({
    providers: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders
    ],
})

export class DatabaseModule {
    
}