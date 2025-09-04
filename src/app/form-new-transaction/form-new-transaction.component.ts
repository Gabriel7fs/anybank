import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../types/transaction';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css'
})
export class FormNewTransactionComponent {

  tipo: string = '';
  valor!: number;

  movimentacaoCriada = output<Transaction>();

  onSubmit() {

    const movimentacao = new Transaction(this.tipo, this.valor);
    console.log(movimentacao);

    this.movimentacaoCriada.emit(movimentacao);

  }
}
