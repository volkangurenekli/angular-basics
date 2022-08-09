import { Component } from '@angular/core';

@Component({ templateUrl: './index.html' })
export class NgContainerComponent {
  movies = [
    'The Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith',
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
  ];

  condition = true;
}
