import { Transaction, TransactionType } from './types/transaction';
import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNewTransactionComponent } from './form-new-transaction/form-new-transaction.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  movimentacao = signal<Transaction[]>([]);

  saldo = computed(() => {
    return this.movimentacao().reduce((acc, mov) => {

      switch (mov.tipo) {
        case TransactionType.DEPOSITO:
          return acc + mov.valor;

        case TransactionType.SAQUE:
          return acc - mov.valor;

        default:
          throw new Error('Movimentação inválida!');
      }
    }, 0);
  });

  processarMovimentacao(mov: Transaction) {

    const saldoAtual = this.saldo();
    if (mov.tipo === TransactionType.SAQUE && mov.valor > saldoAtual) {
      alert('Saldo insuficiente');
      return;
    }

    this.movimentacao.update((listaAtual) => [mov, ...listaAtual]); //irá exibir as trnasações mais recentes
  }
}
