import {
  IsDate,
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
  @IsNotEmpty()
  lote: string;

  @IsNumber()
  @IsNotEmpty()
  stock_actual: number;

  @IsNumber()
  @IsNotEmpty()
  entradas: number;

  @IsNumber()
  @IsNotEmpty()
  salidas: number;

  @IsNumber()
  @IsNotEmpty()
  precio_entrada: number;

  @IsNumber()
  @IsNotEmpty()
  precio_salida: number;

  @IsString()
  @IsNotEmpty()
  fecha_expiracion: string;

  @IsOptional()
  importe: number;

  createdAt: Date;
  updatedAt: Date;
}
