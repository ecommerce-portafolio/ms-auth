import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongooseConfig } from './config/mongoose.config';

@Module({
  imports: [mongooseConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
