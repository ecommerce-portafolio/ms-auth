import { ConfigModule } from '@nestjs/config';
import configuration from './envs.config';

export const configModule = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  load: [configuration],
});
