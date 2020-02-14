import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

import { 
    usuariosProviders,
    clientesProviders,
    cobradorProviders, 
    rutasProvider,
    TiposDeGastoProvider
} from "./Entitys.providers";

@Module({
    providers: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider
    ],
})

export class DatabaseModule {
    
}