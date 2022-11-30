import { AccountsPayable } from './../../accounts-payable/schema/accounts-payable.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { AccountsReceivable } from './../../accounts-receivable/schema/accounts-receivable.schema';

export type ContributionDocument = HydratedDocument<Contribution>;

@Schema({ timestamps: true })
export class Contribution {
  @Prop()
  aporte_date: Date;

  @Prop()
  amount: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'AccountsReceivable' })
  accounts_receivable: AccountsReceivable;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'AccountsPayable' })
  accounts_payable: AccountsPayable;
}

export const ContributionSchema = SchemaFactory.createForClass(Contribution);
