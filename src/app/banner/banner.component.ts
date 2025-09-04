import { Component, input } from '@angular/core';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-banner',
  imports: [WelcomeBannerComponent, AccountComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  saldo = input.required<number>();
}
