import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from './user.schema';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
  
  @Prop()
  isPublished: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  authorId: User;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
