import { Component } from '@angular/core';

@Component({ templateUrl: './index.html' })
export class StatementsComponent {
  heroes = ['Hero 1', 'Hero 2', 'Hero 3', 'Hero 4'];

  delete = () => console.log('Hero deleted');

  removeHero = (name: string) => console.log('Removed', name);

  onSave = (param: MouseEvent) => console.log('Saved with ', param);
}
