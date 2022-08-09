import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="d-flex w-100 align-items-stretch">
      <nav id="sidebar" [class]="isOpen ? 'open' : 'close'">
        <ul class="list-unstyled">
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="text-interpolation"
              >text interpolation</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="statements"
              >statements</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="property-binding"
              >property binding</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="two-way-binding"
              >two way binding</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="template-reference-variable"
              >template reference variable</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="ng-template"
              >ng template</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="ng-container"
              >ng container</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="ng-template-outlet"
              >ng template outlet</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="content-projection"
              >content projection</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="single-slot-content-projection"
              >single slot content projection</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="multi-slot-content-projection"
              >multi slot content projection</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              routerLink="conditional-content-projection"
              >conditional content projection</a
            >
          </li>
        </ul>
      </nav>

      <div class="container">
        <div class="btn btn-primary my-5" (click)="onClick()">
          {{ isOpen ? '&#9747;' : '&#9776;' }}
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  isOpen: boolean = false;
  onClick = () => (this.isOpen = !this.isOpen);
}
