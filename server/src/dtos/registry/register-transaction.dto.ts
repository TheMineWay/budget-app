import { Type } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class RegisterTransactionDTO {
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  @MaxLength(1024)
  description?: string;

  @IsNumber()
  categoryId: number;

  @IsDate()
  @Type(() => Date)
  transactionTime: Date;
}
