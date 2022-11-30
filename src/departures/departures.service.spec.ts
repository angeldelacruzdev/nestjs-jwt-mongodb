import { Test, TestingModule } from '@nestjs/testing';
import { DeparturesService } from './departures.service';

describe('DeparturesService', () => {
  let service: DeparturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeparturesService],
    }).compile();

    service = module.get<DeparturesService>(DeparturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
