import { Module } from '@nestjs/common';
import { RegistryService } from './registry.service';
import { RegistryController } from './registry.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionEntity } from '../../database/entities/transaction.entity';
import { CategoryEntity } from '../../database/entities/category.entity';

@Module({
  providers: [RegistryService],
  controllers: [RegistryController],
  imports: [SequelizeModule.forFeature([TransactionEntity, CategoryEntity])],
})
export class RegistryModule {}
