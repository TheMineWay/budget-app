import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RegistryService } from './registry.service';
import { RegisterTransactionDTO } from '../../dtos/registry/register-transaction.dto';
import { UpdateTransactionDTO } from '../../dtos/registry/update-transaction.dto';
import { ReadTransactionsDTO } from '../../dtos/registry/read-transactions.dto';

@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Post()
  async registerTransaction(@Body() body: RegisterTransactionDTO) {
    return await this.registryService.registerTransaction(body);
  }

  @Patch(':transactionId')
  async updateTransaction(
    @Body() body: UpdateTransactionDTO,
    @Param('transactionId', ParseIntPipe) transactionId: number,
  ) {
    return await this.registryService.updateTransaction(transactionId, body);
  }

  @Delete(':transactionId')
  async deleteTransaction(
    @Param('transactionId', ParseIntPipe) transactionId: number,
  ) {
    return await this.registryService.deleteTransaction(transactionId);
  }

  @Get()
  async readTransactions(@Query() query: ReadTransactionsDTO) {
    return await this.registryService.readTransactions(query);
  }
}
