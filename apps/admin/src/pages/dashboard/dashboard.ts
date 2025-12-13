import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  readonly #breadcumb = inject(BreadcrumbService);

  ngOnInit(): void {
    this.#breadcumb.setDashboard();
  }
}
