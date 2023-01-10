import {
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  @IsNotEmpty()
  codigo_producto: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsOptional()
  lote: string;

  @IsNumber()
  @IsOptional()
  stock_actual: number;

  @IsNumber()
  @IsOptional()
  entradas: number;

  @IsNumber()
  @IsOptional()
  salidas: number;

 
  @IsNotEmpty()
  precio_entrada: number;

 
  @IsNotEmpty()
  precio_salida: number;

  @IsString()
  @IsNotEmpty()
  fecha_expiracion: Date;

  @IsOptional()
  importe: number;

  createdAt: Date;
  updatedAt: Date;
}
