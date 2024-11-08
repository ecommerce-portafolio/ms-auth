import { Module } from '@nestjs/common';
import { configModule, mongooseConfig } from './config';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [configModule, mongooseConfig, UsersModule, SharedModule],
})
export class AppModule {}
