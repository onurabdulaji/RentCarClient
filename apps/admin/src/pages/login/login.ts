import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Result } from '../../models/result.model';
import { Router } from '@angular/router';
import { FormValidateDirective } from 'form-validate-angular';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FormValidateDirective],
  templateUrl: './login.html',
})
export class Login {
  readonly #http = inject(HttpClient);
  readonly #router = inject(Router);

  login(form: NgForm) {
    if (!form.valid) return;

    this.#http
      .post<Result<string>>('/rent/auth/login', form.value)
      .subscribe((res) => {
        localStorage.setItem('response', res.data!);
        this.#router.navigateByUrl('/');
      });
  }
}
