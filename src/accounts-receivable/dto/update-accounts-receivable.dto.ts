import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountsReceivableDto } from './create-accounts-receivable.dto';

export class UpdateAccountsReceivableDto extends PartialType(CreateAccountsReceivableDto) {}
