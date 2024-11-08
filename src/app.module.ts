import { Module } from '@nestjs/common';
import { configModule, mongooseConfig } from './config';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [configModule, mongooseConfig, UsersModule],
})
export class AppModule {}
