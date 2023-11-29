import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface CategoryAttributes {
  id: number;
  name: string;
}

export interface CategoryCreateAttributes
  extends Omit<CategoryAttributes, 'id'> {}

@Table({
  tableName: 'categories',
  timestamps: false,
})
export class CategoryEntity
  extends Model<CategoryAttributes, CategoryCreateAttributes>
  implements CategoryAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  name: string;
}
