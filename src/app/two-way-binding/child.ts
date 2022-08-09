import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'two-way-binding-child',
  template: ` <div>
    <button class="btn btn-danger m-3" (click)="resize(-1)">-</button>
    <button class="btn btn-success m-3" (click)="resize(1)">+</button>
    <br />

    <section class="d-flex justify-content-start align-items-center">
      <div>
        <img style="width: 250px;" src="assets/lightsaber.png" />
      </div>
      <div class="progress w-100" style="z-index: -2;margin-left: -5px;">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          [attr.aria-valuenow]="size"
          [style.width.%]="size"
        ></div>
      </div>
    </section>
  </div>`,
})
export class TwoWayBindingChildComponent {
  @Input() size: number = 50;
  @Output() sizeChange = new EventEmitter<number>();

  resize(delta: number) {
    this.size = this.size + delta;
    this.sizeChange.emit(this.size);
  }
}
