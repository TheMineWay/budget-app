import { Injectable } from '@nestjs/common';
import { RegisterTransactionDTO } from '../../dtos/registry/register-transaction.dto';
import { TransactionEntity } from '../../database/entities/transaction.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RegistryService {
  constructor(
    @InjectModel(TransactionEntity)
    private readonly transactionEntity: typeof TransactionEntity,
  ) {}

  async registerTransaction(transaction: RegisterTransactionDTO) {
    //awaitthis.transactionEntity.create(transaction);
  }
}
