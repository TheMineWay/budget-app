import { Injectable } from '@nestjs/common';
import { RegisterTransactionDTO } from '../../dtos/registry/register-transaction.dto';
import { TransactionEntity } from '../../database/entities/transaction.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateTransactionDTO } from '../../dtos/registry/update-transaction.dto';

@Injectable()
export class RegistryService {
  constructor(
    @InjectModel(TransactionEntity)
    private readonly transactionEntity: typeof TransactionEntity,
  ) {}

  async registerTransaction(transaction: RegisterTransactionDTO) {
    return await this.transactionEntity.create(transaction);
  }

  async updateTransaction(
    transactionId: number,
    transaction: UpdateTransactionDTO,
  ) {
    return await this.transactionEntity.update(transaction, {
      where: {
        id: transactionId,
      },
    });
  }
}
