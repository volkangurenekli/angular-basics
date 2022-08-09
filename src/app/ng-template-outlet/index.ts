import { Component } from '@angular/core';

@Component({ templateUrl: './index.html' })
export class NgTemplateOutletComponent {
  myContext = { jedi: 'Analin Skywalker', sith: 'Darth Vader' };
}
