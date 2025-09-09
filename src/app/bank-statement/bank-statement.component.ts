import { Component, input } from '@angular/core';
import { TransactionComponent } from "./transaction/transaction.component";
import { Transaction } from '../types/transaction';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.css'],
  imports: [TransactionComponent]
})
export class BankStatementComponent {

  movimentacoes = input.required<Transaction[]>();

}
