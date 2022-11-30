import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BusinessService } from './../business/business.service';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schema/customer.schema';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
    private readonly businessService: BusinessService,
  ) {}

  async create(createCustomerDto: CreateCustomerDto, subId: string) {
    /* Checking if the user has a business. */
    const verifyHaveBusiness = await this.verifyHaveBusiness(subId);

    if (verifyHaveBusiness) {
      createCustomerDto.owner = verifyHaveBusiness._id;
    }
    createCustomerDto.owner = subId;

    const createdCustomer = new this.customerModel(createCustomerDto);

    return createdCustomer.save();
  }

  async findAll() {
    return await this.customerModel.find({});
  }

  async findOne(id: string) {
    return await this.customerModel.findById(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }

  async verifyHaveBusiness(subId: string) {
    return await this.businessService.findOwnerBusiness(subId);
  }
}
