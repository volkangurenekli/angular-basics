import { Component } from '@angular/core';

@Component({
  templateUrl: './index.html',
  styles: [
    `
      input + label + .content {
        display: none;
      }

      input:checked + label + .content {
        display: inline;
      }
    `,
  ],
})
export class MultiSlotContentProjectionComponent {}
