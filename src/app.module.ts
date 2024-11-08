import { Module } from '@nestjs/common';
import { configModule, mongooseSchemasConfig, mongooseConfig } from './config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [configModule, mongooseConfig, mongooseSchemasConfig, UsersModule],
})
export class AppModule {}
