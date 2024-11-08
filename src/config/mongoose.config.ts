import { MongooseModule } from '@nestjs/mongoose';

export const mongooseConfig = MongooseModule.forRoot(
  'mongodb://ecommerce:qwerty@localhost:27017',
);
