import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true })
export class Customer {
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
  owner: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
