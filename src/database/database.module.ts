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
    CobradorRutaProvider,
    creditosProvider,
    abonosProvider
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
        ...CobradorRutaProvider,
        ...creditosProvider,
        ...abonosProvider
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
        ...CobradorRutaProvider,
        ...creditosProvider,
        ...abonosProvider
    ],
})

export class DatabaseModule {
    
}