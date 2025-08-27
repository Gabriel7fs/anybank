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

  tipoTransacao: string = '';
  valorTransacao!: number;

  movimentacaoCriada = output<Transaction>();

  onSubmit() {

    const transacao = new Transaction(this.tipoTransacao, this.valorTransacao);
    console.log(transacao);

    this.movimentacaoCriada.emit(transacao);

  }
}
