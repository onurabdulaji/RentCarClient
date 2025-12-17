import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidateDirective } from 'form-validate-angular';
import { HttpService } from '../../services/http';
import { FlexiToastService } from 'flexi-toast';

@Component({
  selector: 'app-login',
  imports: [FormsModule, FormValidateDirective],
  templateUrl: './login.html',
})
export class Login {
  readonly loading = signal<boolean>(false);
  readonly #http = inject(HttpService);
  readonly #router = inject(Router);
  readonly email = signal<string>('');
  readonly #toast = inject(FlexiToastService);
  readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('modalCloseBtn');

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

  forgotPassword() {
    this.#http.post<string>(
      `/rent/auth/forgot-password/${this.email()}`,
      {},
      (res) => {
        this.#toast.showToast('Başarılı', res, 'info');
        this.closeBtn()?.nativeElement.click();
      }
    );
  }
}
