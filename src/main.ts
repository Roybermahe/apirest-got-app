import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, } from '@nestjs/swagger'
import { AppModule } from './app.module';
import { getRepository } from 'typeorm';
import { usuarios } from './models/usuarios.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  getRepository(usuarios).save(<usuarios>{ Id: 1, User: 'Admin', Pass: 'Admin', Type: 'A' });
  /* //--> swagger implementation for future features
  const options = new DocumentBuilder()
      .setTitle('GotApp ApiREST')
      .setDescription('GotApp Api Rest designed with nest.js')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apiGUI', app, document); 
   // -------------------------------------------- */
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
