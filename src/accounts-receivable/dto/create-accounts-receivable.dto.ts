import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAccountsReceivableDto {
  @IsOptional()
  nota: string;

  @IsOptional()
  description: string;

  @IsNumber()
  deuda: number;

  @IsBoolean()
  status: boolean;

  @IsOptional()
  customer: any;

  @IsString()
  tipo_cuenta: string;

  @IsString()
  estado_deuda: string;
}
