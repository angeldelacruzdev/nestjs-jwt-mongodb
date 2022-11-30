import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDepartureDto {
  @IsString()
  @IsNotEmpty()
  codigo_factura_venta: string;

  @IsString()
  @IsNotEmpty()
  codigo_producto: string;

  @IsOptional()
  descripcion: string;

  @IsOptional()
  lote: string;

  @IsOptional()
  fecha: Date;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsOptional()
  precio: number;
}
