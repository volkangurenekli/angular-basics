import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-child',
  template: `
    <div class="bg-secondary text-white p-4">
      <p>{{ team }} Members</p>
      <ng-content></ng-content>
    </div>
  `,
})
export class SingleChild {
  @Input() team = '';
}
