import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Entry, EntryDocument } from './schema/entry.schema';

import { InventoryService } from './../inventory/inventory.service';

@Injectable()
export class EntriesService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
    private readonly inventoryService: InventoryService,
  ) {}

  async create(createEntryDto: CreateEntryDto) {
    //Busca un producto del inventario por el código de prouducto.
    const inventoryData = await this.inventoryService.findByProductCode(
      createEntryDto.codigo_producto,
    );

    const totalEntradas = inventoryData.entradas + createEntryDto.cantidad; // Suma las entradas con las del inventario.
    createEntryDto.descripcion = inventoryData.descripcion; // Agrega la misma descripción del inventario.

    const incrementEntry =
      await this.inventoryService.incrementEntriesOfInventory(
        createEntryDto.codigo_producto,
        totalEntradas,
      );

    if (!incrementEntry) {
      return new HttpException(
        'Problema al incrementar las entradas.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const createdEntry = new this.entryModel(createEntryDto);
    return createdEntry.save();
  }

  async findAll(q: string) {
    let filters: mongoose.FilterQuery<EntryDocument> = {
      $or: [
        { no_factura_compra: new RegExp(q, 'i') },
        { descripcion: new RegExp(q, 'i') },
        { codigo_producto: new RegExp(q, 'i') },
        { lote: new RegExp(q, 'i') },
      ],
    };

    if (!q) {
      filters = {};
    }

    let result = await this.entryModel.find(filters).sort({ createdAt: -1 });

    return result;
  }

  async findEntryByProductCode(q: string) {
    let filters: mongoose.FilterQuery<EntryDocument> = {
      $or: [{ codigo_producto: new RegExp(q, 'i') }],
    };

    let result = await this.entryModel.find(filters);

    return result;
  }

  async findOne(id: string) {
    return await this.entryModel.findById(id);
  }

  async update(id: string, updateEntryDto: UpdateEntryDto) {
    return await this.entryModel.updateMany(
      {
        _id: id,
      },
      updateEntryDto,
    );
  }

  async remove(id: string) {

    return await this.entryModel.deleteMany({ _id: id });
  }
}
