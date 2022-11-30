import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SupplierDocument = HydratedDocument<Supplier>;

@Schema({ timestamps: true })
export class Supplier {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  phone2: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
