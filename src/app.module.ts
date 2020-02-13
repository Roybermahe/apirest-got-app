import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';

import { AppController } from "./controllers/app.controller";
import { InicioSesionController } from "./controllers/incioSesion.controller";
import { clientesController } from "./controllers/cliente.controller";
import { cobradoresController } from './controllers/cobradores.controller';
import { rutaController } from './controllers/ruta.controller';

import { AppService } from "./services/app.service";
import { InicioSesionService } from "./services/InicioSesion.service";
import { clienteService } from "./services/cliente.service";
import { cobradorService } from './services/cobrador.service';
import { rutaService } from './services/rutas.service';

@Module({
  imports: [
    TypeOrmModule,
    DatabaseModule
  ],
  controllers: [AppController, InicioSesionController, clientesController, cobradoresController, rutaController],
  providers: [AppService, InicioSesionService, clienteService, cobradorService, rutaService],
})

export class AppModule { }
