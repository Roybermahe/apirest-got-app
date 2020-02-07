import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('ESCUCHANDO EN PUERTO 3000');
  console.log('ESCUCHANDO EN PUERTO 5500');
  await app.listen(3000);
}

bootstrap();
