import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { BreadcrumbService } from 'apps/admin/src/services/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [NgClass, RouterLink],
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  readonly breadcrumb = inject(BreadcrumbService);
}
