import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidateDirective } from 'form-validate-angular';
import { HttpService } from '../../services/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FormValidateDirective],
  templateUrl: './login.html',
})
export class Login {
  readonly loading = signal<boolean>(false);
  readonly #http = inject(HttpService);
  readonly #router = inject(Router);

  login(form: NgForm) {
    if (!form.valid) return;

    this.loading.set(true);
    this.#http.post<string>(
      '/rent/auth/login',
      form.value,
      (res) => {
        localStorage.setItem('response', res);
        this.#router.navigateByUrl('/');
        this.loading.set(false);
      },
      () => {
        this.loading.set(false);
      }
    );
  }
}
