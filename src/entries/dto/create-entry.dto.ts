import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEntryDto {
  @IsString()
  no_factura_compra: string;

  @IsString()
  fecha: Date;

  @IsString()
  codigo_producto: string;

  @IsOptional()
  descripcion: string;

  @IsOptional()
  supplier: any;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precio: number;

  @IsString()
  lote: string;
}
