import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PermissionDocument = Permission & Document;

@Schema({
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class Permission {
  @Prop({ required: true })
  area: string;

  @Prop({ required: true })
  action: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
