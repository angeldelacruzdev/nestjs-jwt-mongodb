import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Supplier } from './../../suppliers/schema/supplier.schema';

export type EntryDocument = Entry & Document;

@Schema({ timestamps: true })
export class Entry {
  @Prop()
  no_factura_compra: string;

  @Prop()
  fecha: Date;

  @Prop()
  codigo_producto: string;

  @Prop()
  descripcion: string;

  @Prop()
  cantidad: number;

  @Prop()
  precio: number;

  @Prop()
  lote: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' })
  supplier: Supplier;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
