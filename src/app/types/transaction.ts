export class Transaction {

  constructor(
    public readonly tipo: string,
    public readonly valor: number
  ) { }
}

export enum TransactionType {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
