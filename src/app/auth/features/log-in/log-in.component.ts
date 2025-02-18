import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-log-in',
  imports: [ InputTextModule, PasswordModule, CheckboxModule, ButtonModule ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {

  constructor(private router: Router ){}
  login() {
    this.router.navigate(['/dashboard']);
  }

}
