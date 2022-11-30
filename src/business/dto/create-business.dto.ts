import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  province_state: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  createdAt: Date;

  updatedAt: Date;

  @IsOptional()
  owner: any;

  @IsOptional()
  description: string;
}
