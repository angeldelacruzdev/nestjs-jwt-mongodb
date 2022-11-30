import { Test, TestingModule } from '@nestjs/testing';
import { AccountsPayableService } from './accounts-payable.service';

describe('AccountsPayableService', () => {
  let service: AccountsPayableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsPayableService],
    }).compile();

    service = module.get<AccountsPayableService>(AccountsPayableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
