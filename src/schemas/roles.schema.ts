import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  rolesAccessAction: Object[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
