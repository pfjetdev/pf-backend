import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AuditInterceptor } from './common/interceptors/audit.interceptor';

const REQUIRED_ENV = ['DATABASE_URL', 'JWT_SECRET'] as const;

async function bootstrap() {
  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  if (missing.length) {
    throw new Error(`Missing env vars: ${missing.join(', ')}`);
  }

  const app = await NestFactory.create(AppModule, { bodyParser: false });

  // Register body parsers with size limit to prevent OOM
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const express = require('express');
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new AuditInterceptor());

  const isProduction = process.env.NODE_ENV === 'production';
  app.enableCors({
    origin: isProduction
      ? [
          'https://priorityflyers.com',
          'https://www.priorityflyers.com',
          'https://pfbusiness.vercel.app',
        ]
      : ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });

  app.enableShutdownHooks();

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  Logger.log(`API running on :${port}`, 'Bootstrap');
}
bootstrap();
