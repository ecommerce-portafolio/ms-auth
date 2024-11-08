import { Role, RoleSchema } from 'src/schemas/role.schema';
import { UserSchema, User } from './../schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, PermissionSchema } from 'src/schemas/permission.schema';

export const mongooseSchemasConfig = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: Role.name, schema: RoleSchema },
  { name: Permission.name, schema: PermissionSchema },
]);
