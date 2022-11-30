import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business, BusinessDocument } from './schema/business.schema';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private businessModel: Model<BusinessDocument>,
  ) {}

  async create(createBusinessDto: CreateBusinessDto) {
    const createdBusiness = new this.businessModel(createBusinessDto);
    return createdBusiness.save();
  }

  async findAll() {
    return await this.businessModel.find({});
  }

  async findOne(id: string) {
    return await this.businessModel.findById(id);
  }

  async update(id: string, updateBusinessDto: UpdateBusinessDto) {
    return await this.businessModel.updateMany({ _id: id }, updateBusinessDto);
  }

  async remove(id: string) {
    return await this.businessModel.deleteMany({ _id: id });
  }

  
 /**
  * It finds a business by the owner's subId
  * @param {string} subId - The subId is the unique identifier for the user. This is the same subId
  * that you get from the Auth0 token.
  * @returns The business object
  */
  async findOwnerBusiness(subId: string) {
    return await this.businessModel.findOne({ owner: subId });
  }
}
