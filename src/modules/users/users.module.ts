import { SharedModule } from './../../shared/shared.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SharedModule],
})
export class UsersModule {}
