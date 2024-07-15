import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração básica de CORS para permitir todas as origens
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
