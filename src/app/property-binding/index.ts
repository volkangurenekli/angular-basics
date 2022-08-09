import { Component } from '@angular/core';

@Component({ templateUrl: './index.html' })
export class PropertyBindingComponent {
  console;
  constructor() {
    this.console = window.console;
  }

  hero = 'Boba Fett';

  imgUrl =
    'https://whatsondisneyplus.com/wp-content/uploads/2021/12/boba-avatar-wodp.png';

  desc =
    'Boba Fett was a human male crime lord and former bounty hunter whose career spanned decades, from the fall of the Galactic Republic to the end of the rule of the Galactic Empire.';

  alwaysTrue = true;

  alwaysFalse = false;

  classes = 'card text-dark w-50 m-2 p-2';
}
