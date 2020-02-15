import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

import { 
    usuariosProviders,
    clientesProviders,
    cobradorProviders, 
    rutasProvider,
    TiposDeGastoProvider,
    GastoProvider,
    ClienteRutaProvider,
    CobradorRutaProvider
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
        ...ClienteRutaProvider,
        ...CobradorRutaProvider
    ],
    exports: [
        ...databaseProviders, 
        ...usuariosProviders,
        ...clientesProviders,
        ...cobradorProviders,
        ...rutasProvider,
        ...TiposDeGastoProvider,
        ...GastoProvider,
        ...ClienteRutaProvider,
        ...CobradorRutaProvider
    ],
})

export class DatabaseModule {
    
}