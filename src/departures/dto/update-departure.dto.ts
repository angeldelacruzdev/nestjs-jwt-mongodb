import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartureDto } from './create-departure.dto';

export class UpdateDepartureDto extends PartialType(CreateDepartureDto) {}
