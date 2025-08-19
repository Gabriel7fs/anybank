import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-banner',
  imports: [WelcomeBannerComponent, AccountComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  dataAtual = new Date();
}
