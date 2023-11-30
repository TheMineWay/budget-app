import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions:
      process.env.USE_HTTPS !== 'false'
        ? {
            key: fs.readFileSync('/app/certificates/key.pem'),
            cert: fs.readFileSync('/app/certificates/cert.pem'),
          }
        : {},
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors();

  await app.listen(+process.env.SERVER_PORT);
}
bootstrap();
