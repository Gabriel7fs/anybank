import { nanoid } from "nanoid";

export class Transaction {
  readonly id = nanoid();
  readonly data: Date = new Date()

  constructor(
    public readonly tipo: string,
    public readonly valor: number
  ) { }
}

export enum TransactionType {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
