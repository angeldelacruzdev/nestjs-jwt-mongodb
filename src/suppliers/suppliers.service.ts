import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

import { Supplier, SupplierDocument } from './schema/supplier.schema';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Supplier.name) private supplierModel: Model<SupplierDocument>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const createdSupplier = new this.supplierModel(createSupplierDto);
    return createdSupplier.save();
  }

  async findAll() {
    return await this.supplierModel.find({});
  }

  async findOne(id: string) {
    return await this.supplierModel.findById(id);
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    return await this.supplierModel.updateMany({ _id: id }, updateSupplierDto);
  }

  async remove(id: string) {
    return await this.supplierModel.deleteMany({ _id: id });
  }
}
