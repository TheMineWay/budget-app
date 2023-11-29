import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RegistryService } from './registry.service';
import { RegisterTransactionDTO } from '../../dtos/registry/register-transaction.dto';
import { UpdateTransactionDTO } from '../../dtos/registry/update-transaction.dto';

@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Post('register')
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
}
