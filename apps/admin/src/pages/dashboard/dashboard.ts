import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb';
import { Blank } from '../../components/blank/blank';

@Component({
  selector: 'app-dashboard',
  imports: [Blank],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  readonly #breadcumb = inject(BreadcrumbService);

  ngOnInit(): void {
    this.#breadcumb.setDashboard();
  }
}
