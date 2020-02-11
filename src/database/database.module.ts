import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { usuariosProviders } from "./usuarios.providers";

@Module({
  providers: [
      ...databaseProviders, 
      ...usuariosProviders],
  exports: [
      ...databaseProviders, 
      ...usuariosProviders],
})

export class DatabaseModule {
    
}