import { DatePipe, Location, NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityModel } from '../../models/entity.model';

@Component({
  selector: 'app-blank',
  imports: [NgClass, RouterLink, DatePipe],
  templateUrl: './blank.html',
})
export class Blank {
  readonly pageTitle = input.required<string>();
  readonly pageDescription = input<string>('');
  readonly pageIcon = input.required<string>();
  readonly showStatus = input<boolean>(false);
  readonly status = input<boolean>(true);
  readonly showBackBtn = input<boolean>(true);
  readonly showEditBtn = input<boolean>(false);
  readonly editBtnUrl = input<string>('');
  readonly audit = input<EntityModel>();
  readonly showAudit = input<boolean>(false);

  readonly #location = inject(Location);

  back() {
    this.#location.back();
  }
}
