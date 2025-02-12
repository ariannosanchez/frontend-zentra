import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNG } from 'primeng/config';
import { PRIMENG_ES } from './i18n/primeng-es';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'zentra-frontend';

  private primengConfig = inject(PrimeNG);

  ngOnInit(): void {
    this.primengConfig.setTranslation(PRIMENG_ES);
  }
}
