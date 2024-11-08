import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors();
  app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: configService.get('DEFAULT_VERSION'),
    prefix: configService.get('PREFIX_VERSION'),
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
