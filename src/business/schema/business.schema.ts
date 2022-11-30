import { User } from './../../users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type BusinessDocument = Business & Document;

@Schema({ timestamps: true })
export class Business {
  @Prop({ required: true, index: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ index: true })
  phone: string;

  @Prop()
  country: string;

  @Prop()
  province_state: string;

  @Prop()
  address: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
