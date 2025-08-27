import { Transaction } from './types/transaction';
import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNewTransactionComponent } from './form-new-transaction/form-new-transaction.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNewTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  processarMovimentacao(transacao: Transaction) {
    console.log(transacao);
  }
}
