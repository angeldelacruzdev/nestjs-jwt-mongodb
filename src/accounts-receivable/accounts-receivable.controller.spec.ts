import { Test, TestingModule } from '@nestjs/testing';
import { AccountsReceivableController } from './accounts-receivable.controller';
import { AccountsReceivableService } from './accounts-receivable.service';

describe('AccountsReceivableController', () => {
  let controller: AccountsReceivableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsReceivableController],
      providers: [AccountsReceivableService],
    }).compile();

    controller = module.get<AccountsReceivableController>(AccountsReceivableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
