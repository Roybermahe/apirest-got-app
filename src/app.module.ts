import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';

import { AppController } from "./controllers/app.controller";
import { InicioSesionController } from "./controllers/incioSesion.controller";
import { clientesController } from "./controllers/cliente.controller";
import { cobradoresController } from './controllers/cobradores.controller';
import { rutaController } from './controllers/ruta.controller';
import { tipoGastoController } from './controllers/tipoGasto.controller';
import { gastoController } from './controllers/gasto.controller';

import { AppService } from "./services/app.service";
import { InicioSesionService } from "./services/InicioSesion.service";
import { clienteService } from "./services/cliente.service";
import { cobradorService } from './services/cobrador.service';
import { rutaService } from './services/rutas.service';
import { tipoGastoService } from './services/tipoGasto.service';
import { gastoService } from './services/gasto.service';
import { clientesRutaService } from './services/clientesRuta.service';
import { clientesRutaController } from './controllers/clientesRuta.controller';
import { cobradorRutaService } from './services/cobradorRuta.service';
import { cobradorRutasController } from './controllers/cobradorRuta.controller';

@Module({
  imports: [
    TypeOrmModule,
    DatabaseModule
  ],
  controllers: [
    AppController, 
    InicioSesionController, 
    clientesController, 
    cobradoresController, 
    rutaController, 
    tipoGastoController,
    gastoController,
    clientesRutaController,
    cobradorRutasController
  ],
  providers: [
    AppService, 
    InicioSesionService, 
    clienteService, 
    cobradorService, 
    rutaService, 
    tipoGastoService,
    gastoService, 
    clientesRutaService,
    cobradorRutaService
  ],
})

export class AppModule { }
