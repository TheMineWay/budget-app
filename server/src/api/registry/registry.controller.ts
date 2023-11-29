import { Body, Controller, Post } from '@nestjs/common';
import { RegistryService } from './registry.service';
import { RegisterTransactionDTO } from '../../dtos/registry/register-transaction.dto';

@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Post('register')
  async registerTransaction(@Body() body: RegisterTransactionDTO) {
    return await this.registryService.registerTransaction(body);
  }
}
