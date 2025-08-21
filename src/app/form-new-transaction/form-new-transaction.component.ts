import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css'
})
export class FormNewTransactionComponent {

  tipoTransacao: string = '';
  valorTransacao!: number;

  onSubmit() {
    console.log(this.valorTransacao);
    console.log(this.tipoTransacao);
  }
}
