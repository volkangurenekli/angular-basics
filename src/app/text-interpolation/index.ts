import { Component } from '@angular/core';

@Component({
  templateUrl: './index.html',
  styles: ['* { margin: 1rem;}'],
})
export class TextInterpolationComponent {
  title = 'The Book Of Boba Fett';

  imageUrl = 'https://ntvb.tmsimg.com/assets/p20754834_b_h8_aa.jpg?w=640&h=360';

  description =
    'The Book of Boba Fett is a live-action television series that focuses on the character Boba Fett. Its first episode was released on December 29, 2021. It was first teased, with both its title and release window, in a post-credits sequence of the season two finale of The Mandalorian.';

  sum = (a: number, b: number) => a + b;
}
