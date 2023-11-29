import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface TransactionAttributes {
  id: number;
  amount: number;
  description: string;
  createdAt: Date;
  categoryId: number;
  transactionTime: Date;
}

export interface TransactionCreateAttributes
  extends Omit<TransactionAttributes, 'id'> {}

@Table({
  tableName: 'transaction',
  createdAt: 'created_at',
  updatedAt: false,
})
export class TransactionEntity
  extends Model<TransactionAttributes, TransactionCreateAttributes>
  implements Omit<TransactionAttributes, 'createdAt'>
{
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  amount: number;

  @AllowNull(true)
  @Column(DataType.STRING(1024))
  description: string;

  @AllowNull(false)
  @Column({ field: 'category_id', type: DataType.INTEGER })
  categoryId: number;

  @AllowNull(true)
  @Column({ field: 'transaction_time', type: DataType.DATE })
  transactionTime: Date;
}
