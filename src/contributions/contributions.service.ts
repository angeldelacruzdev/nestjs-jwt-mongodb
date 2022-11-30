import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { UpdateContributionDto } from './dto/update-contribution.dto';
import { Contribution , ContributionDocument} from './schema/contribution.schema';

@Injectable()
export class ContributionsService {

  constructor(@InjectModel(Contribution.name) private contributionModel: Model<ContributionDocument>) {}

  async create(createContributionDto: CreateContributionDto) {
    
      console.log(createContributionDto)
    return;
  }

  findAll() {
    return `This action returns all contributions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contribution`;
  }

  update(id: number, updateContributionDto: UpdateContributionDto) {
    return `This action updates a #${id} contribution`;
  }

  remove(id: number) {
    return `This action removes a #${id} contribution`;
  }
}
