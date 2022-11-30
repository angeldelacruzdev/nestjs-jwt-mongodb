import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DepartureDocument = Departure & Document;

@Schema({ timestamps: true })
export class Departure {
  @Prop()
  codigo_factura_venta: string;

  @Prop()
  codigo_producto: string;

  @Prop()
  descripcion: string;

  @Prop()
  lote: string;

  @Prop()
  fecha: Date;

  @Prop()
  cantidad: number;

  @Prop()
  precio: number;
}

export const DepartureSchema = SchemaFactory.createForClass(Departure);
