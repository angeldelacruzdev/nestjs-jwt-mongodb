import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema({ timestamps: true })
export class Inventory {
  @Prop()
  codigo_producto: string;

  @Prop()
  descripcion: string;

  @Prop()
  lote: string;

  @Prop({default: 0})
  stock_actual: number;

  @Prop()
  entradas: number;

  @Prop()
  salidas: number;

  @Prop()
  precio_entrada: number;

  @Prop()
  precio_salida: number;

  @Prop()
  fecha_expiracion: Date;

  @Prop({default: 0})
  importe: number; // se calcula el costo unitario por el stock actual

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
