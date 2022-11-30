import { Test, TestingModule } from '@nestjs/testing';
import { DeparturesController } from './departures.controller';
import { DeparturesService } from './departures.service';

describe('DeparturesController', () => {
  let controller: DeparturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeparturesController],
      providers: [DeparturesService],
    }).compile();

    controller = module.get<DeparturesController>(DeparturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
