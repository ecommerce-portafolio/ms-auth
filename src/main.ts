import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';
import { getSpringConfig } from './config';

async function bootstrap() {
  await getSpringConfig();

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors();
  app.setGlobalPrefix(configService.get('ms.config.prefix'));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: configService.get('ms.config.version'),
    prefix: configService.get('ms.config.prefix.version'),
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
