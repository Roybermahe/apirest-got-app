import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

import { 
    usuariosProviders,
    clientesProviders,
    cobradorProviders, 
    rutasProvider,
    TiposDeGastoProvider,
    GastoProvider,
    ClienteRutaProvider
} from "./Entitys.providers";

@Module({
    providers: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider,
        ...GastoProvider,
        ...ClienteRutaProvider
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider,
        ...GastoProvider,
        ...ClienteRutaProvider
    ],
})

export class DatabaseModule {
    
}