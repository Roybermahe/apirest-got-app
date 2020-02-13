import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController} from './controllers/app.controller';
import { InicioSesionController } from "./controllers/incioSesion.controller";
import { InicioSesionService } from './services/InicioSesion.service';
import { AppService } from './services/app.service';
import { DatabaseModule } from './database/database.module';
import { clienteService } from './services/cliente.service';
import { clientesController } from './controllers/cliente.controller';

@Module({
  imports: [
    TypeOrmModule,
    DatabaseModule
  ],
  controllers: [AppController, InicioSesionController, clientesController],
  providers: [AppService, InicioSesionService, clienteService],
})

export class AppModule {}
