import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountsPayableDto } from './create-accounts-payable.dto';

export class UpdateAccountsPayableDto extends PartialType(CreateAccountsPayableDto) {}
