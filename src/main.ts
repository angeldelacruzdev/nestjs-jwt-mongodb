import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.setGlobalPrefix('v1');

  app.use(helmet());

  app.enableCors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(process.env.PORT);
}
bootstrap();
