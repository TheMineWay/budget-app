import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class ReadTransactionsDTO {
  @Max(200)
  @IsNumber()
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  offset?: number;

  // Filters
  @IsOptional()
  @IsString()
  @MaxLength(128)
  text?: string;
}
