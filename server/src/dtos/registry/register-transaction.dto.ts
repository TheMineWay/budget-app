export class RegisterTransactionDTO {
  amount: number;
  description?: string;
  categoryId: number;
  transactionTime: Date;
}
