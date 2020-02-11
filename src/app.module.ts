import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController} from './controllers/app.controller';
import { InicioSesion } from "./controllers/incioSesion.controller";
import { InicioSesionService } from './services/InicioSesion.service';
import { AppService } from './services/app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TypeOrmModule,
    DatabaseModule
  ],
  controllers: [AppController,InicioSesion],
  providers: [AppService,InicioSesionService],
})

export class AppModule {}
