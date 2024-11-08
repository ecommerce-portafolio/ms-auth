import { mongooseSchemasConfig } from './../config/mongoose-schemas.config';
import { Module } from '@nestjs/common';

@Module({
  imports: [mongooseSchemasConfig],
  exports: [mongooseSchemasConfig],
})
export class SharedModule {}
