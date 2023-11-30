import { Injectable } from '@nestjs/common';
import { RegisterTransactionDTO } from '../../dtos/registry/register-transaction.dto';
import {
  TransactionAttributes,
  TransactionEntity,
} from '../../database/entities/transaction.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateTransactionDTO } from '../../dtos/registry/update-transaction.dto';
import { ReadTransactionsDTO } from '../../dtos/registry/read-transactions.dto';
import { WhereOptions } from 'sequelize';
import { Op } from 'sequelize';
import { CategoryEntity } from '../../database/entities/category.entity';

@Injectable()
export class RegistryService {
  constructor(
    @InjectModel(TransactionEntity)
    private readonly transactionEntity: typeof TransactionEntity,
    @InjectModel(CategoryEntity)
    private readonly categoryEntity: typeof CategoryEntity,
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

  async deleteTransaction(transactionId: number) {
    return await this.transactionEntity.destroy({
      where: { id: transactionId },
    });
  }

  async readTransactions({ limit, offset, text }: ReadTransactionsDTO) {
    const where: WhereOptions<TransactionAttributes> = {};

    if (text) where.description = { [Op.like]: text };

    return await this.transactionEntity.findAndCountAll({
      limit,
      offset,
      where,
    });
  }

  async getCategories() {
    return await this.categoryEntity.findAll();
  }
}
