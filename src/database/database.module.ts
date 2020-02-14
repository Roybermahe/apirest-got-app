import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

import { 
    usuariosProviders,
    clientesProviders,
    cobradorProviders, 
    rutasProvider,
    TiposDeGastoProvider,
    GastoProvider
} from "./Entitys.providers";

@Module({
    providers: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider,
        ...GastoProvider
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider,
        ...GastoProvider
    ],
})

export class DatabaseModule {
    
}