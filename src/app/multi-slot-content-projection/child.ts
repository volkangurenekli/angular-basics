import { Component } from '@angular/core';

@Component({
  selector: 'multi-child',
  template: `
    <div class="bg-secondary p-4 text-white">
      <p>We are in multi slot content projection child component</p>

      Default:
      <ng-content></ng-content>

      <br />

      Question:
      <ng-content select="[question]"></ng-content>

      <br />
      <br />

      <ng-content select="[answer]"></ng-content>

      <br />

      <ng-content select=".hint"></ng-content>
    </div>
  `,
})
export class MultiChild {}
