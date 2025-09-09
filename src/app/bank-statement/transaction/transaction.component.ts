import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Transaction, TransactionType } from '../../types/transaction';

@Component({
  selector: 'app-transaction',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  transacao = input.required<Transaction>();

  valor = computed(() => {
    if (this.transacao().tipo === TransactionType.SAQUE) {
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  });
}
