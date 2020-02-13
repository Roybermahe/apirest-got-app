import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { 
    usuariosProviders,
    clientesProviders,
    cobradorProviders, 
    rutasProvider
} from "./Entitys.providers";

@Module({
    providers: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider
    ],
})

export class DatabaseModule {
    
}