import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

import { Inventory, InventoryDocument } from './schema/inventory.schema';

import { ReduceInventory } from './../interface';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name)
    private inventoryModel: Model<InventoryDocument>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const createdInventory = new this.inventoryModel(createInventoryDto);
    return createdInventory.save();
  }

  async findAll(q) {
    let filters: mongoose.FilterQuery<InventoryDocument> = {
      $or: [
        { descripcion: new RegExp(q, 'i') },
        { codigo_producto: new RegExp(q, 'i') },
        { lote: new RegExp(q, 'i') },
      ],
    };

    if (!q) {
      filters = {};
    }
    let result = await this.inventoryModel.find(filters).sort({ createdAt: -1 });

    return result;
  }

  async findOne(id: string) {
    return await this.inventoryModel.findById(id);
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    return await this.inventoryModel.updateMany(
      { _id: id },
      updateInventoryDto,
    );
  }

  async remove(id: string) {
    return await this.inventoryModel.deleteMany({ _id: id });
  }

  /**
   * It returns a promise that resolves to a document from the inventory collection that matches the
   * code parameter
   * @param {string} code - string
   * @returns The inventoryModel is being returned.
   */
  async findByProductCode(code: string) {
    return await this.inventoryModel.findOne({ codigo_producto: code });
  }

  /**
   * This function increments the entries of an inventory by a given value
   * @param {string} code - The code of the inventory item to increment the entries of.
   * @param {number} value - number - The amount of entries to increment by.
   */
  async incrementEntriesOfInventory(code: string, value: number) {
    return await this.inventoryModel.updateMany(
      { codigo_producto: code },
      { entradas: value },
    );
  }

  /**
   * "Reduce the inventory of a product by a given amount."
   *
   * The function is async, which means it returns a promise
   * @param {ReduceInventory} reduce - ReduceInventory - This is the object that will be passed to the
   * function.
   */
  async reduceInventory(reduce: ReduceInventory) {
    return await this.inventoryModel.updateMany(
      { codigo_producto: reduce.code },
      {
        stock_actual: reduce.stock_actual,
        salidas: reduce.salidas,
        importe: reduce.importe,
      },
    );
  }
}
