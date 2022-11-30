import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Customer } from '../../customers/schema/customer.schema';

export type AccountsPayableDocument = HydratedDocument<AccountsPayable>;

@Schema()
export class AccountsPayable {
  @Prop()
  nota: string;

  @Prop()
  description: string;

  @Prop()
  deuda: number;

  @Prop()
  status: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customer: Customer;

  @Prop({
    type: String,
    enum: ['largo plazo', 'corto plazo', 'ninguno'],
    default: 'ninguno',
  })
  tipo_cuenta: string;

  @Prop({
    type: String,
    enum: ['pagado', 'atrasado', 'sin pagar'],
    default: 'sin pagar',
  })
  estado_deuda: string;
}

export const AccountsPayableSchema =
  SchemaFactory.createForClass(AccountsPayable);
