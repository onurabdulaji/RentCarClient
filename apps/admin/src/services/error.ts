import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FlexiToastService } from 'flexi-toast';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  readonly #toast = inject(FlexiToastService);
  handler(err: HttpErrorResponse) {
    console.log(err);
    const status = err.status;
    if (status === 403 || status === 422 || status === 500) {
      const messages = err.error?.message;
      if (Array.isArray(messages)) {
        messages.forEach((val: string) => {
          this.#toast.showToast('Hata!', val, 'error');
        });
      }
    }
  }
}
