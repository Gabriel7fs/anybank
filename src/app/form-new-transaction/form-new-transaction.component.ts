import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../types/transaction';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css'
})
export class FormNewTransactionComponent {

  tipo: string = '';
  valor!: number;

  tipoMovEnum = TransactionType;

  movimentacaoCriada = output<Transaction>();

  onSubmit() {

    const movimentacao = new Transaction(this.tipo, this.valor);

    this.movimentacaoCriada.emit(movimentacao);

  }
}
