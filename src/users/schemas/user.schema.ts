import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ index: true })
  name: string;

  @Prop({ index: true })
  full_name: string;

  @Prop({ index: true })
  phone: string;

  @Prop()
  country: string;

  @Prop()
  province_state: string;

  @Prop()
  address: string;

  @Prop()
  rereferred_by: string;

  @Prop({ unique: true, index: true })
  email: string;

  @Prop()
  password: string;

  @Prop({
    type: String,
    enum: ['admin', 'user', 'vendedor'],
    default: 'user',
  })
  role: string;

  @Prop()
  hashdRt: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
