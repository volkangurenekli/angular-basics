import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: ` <div
    class="card text-white bg-dark m-2 p-2"
    style="width: 18rem;"
  >
    <img class="card-img-top" src="{{ url }}" alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>`,
})
export class PropertyBindingChildComponent {
  @Input() title = '';
  @Input() url = '';
  @Input() description = '';
}
