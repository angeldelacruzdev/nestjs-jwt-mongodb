import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartureDto } from './dto/create-departure.dto';
import { UpdateDepartureDto } from './dto/update-departure.dto';

import { Departure, DepartureDocument } from './schema/departure.schema';

import { InventoryService } from './../inventory/inventory.service';

import { ReduceInventory } from './../interface';

@Injectable()
export class DeparturesService {
  constructor(
    @InjectModel(Departure.name)
    private departureModel: Model<DepartureDocument>,
    private readonly inventoryService: InventoryService,
  ) {}

  async create(createDepartureDto: CreateDepartureDto) {
    const inventory = await this.inventoryService.findByProductCode(
      createDepartureDto.codigo_producto,
    );

    if (!inventory) {
      return new HttpException(
        'Problema al encontrar el producto en el inventario.',
        HttpStatus.BAD_REQUEST,
      );
    }

    let cantidadProductoADescontar: number;
    let salidasARestar: number;
    let salidas: number;
    let stock: number;
    if (inventory.stock_actual == 0) {
      // resta la cantidad a entradas en caso de que el stock este en 0, para setear el stock;
      let stockrestante = inventory.entradas - createDepartureDto.cantidad;
      stock = stockrestante;
    } else {
      stock = inventory.stock_actual - createDepartureDto.cantidad;
    }

    if (inventory.salidas == 0) {
      salidas = createDepartureDto.cantidad;
    } else {
      salidas = inventory.salidas + createDepartureDto.cantidad;
    }

    let importe: number = 0;
    if (inventory.importe == 0) {
      importe = inventory.precio_salida * createDepartureDto.cantidad;
    } else {
      importe =
        inventory.precio_salida * createDepartureDto.cantidad +
        inventory.importe;
    }

    const reduce: ReduceInventory = {
      stock_actual: stock,
      importe,
      salidas,
      code: createDepartureDto.codigo_producto,
    };

    const reduceSalidasDeInventorio =
      await this.inventoryService.reduceInventory(reduce);

    if (!reduceSalidasDeInventorio) {
      return new HttpException(
        'Problema al reducir las entradas del inventario.',
        HttpStatus.BAD_REQUEST,
      );
    }

    createDepartureDto.descripcion = inventory.descripcion;
    createDepartureDto.precio = inventory.precio_salida;
    createDepartureDto.lote = inventory.lote;

    const createdSalida = new this.departureModel(createDepartureDto);
    return createdSalida.save();
  }

  async findAll() {
    return await this.departureModel.find({});
  }

  async findOne(id: string) {
    return await this.departureModel.findById(id);
  }

  /**
   * It returns a promise that resolves to an invoice object.
   * @param {string} invoice - string
   */
  async findOneByInvoiceNumber(invoice: string) {
    return await this.departureModel.findOne({ codigo_factura_venta: invoice });
  }

  update(id: number, updateDepartureDto: UpdateDepartureDto) {
    return `This action updates a #${id} departure`;
  }

  remove(id: number) {
    return `This action removes a #${id} departure`;
  }
}
