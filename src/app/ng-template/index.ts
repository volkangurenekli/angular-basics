import { Component } from '@angular/core';

@Component({ templateUrl: './index.html' })
export class NgTemplateComponent {
  status = true;
  progressValue = 0;

  getData = () => {
    this.status = false;
    const myInterval = setInterval(() => {
      if (++this.progressValue > 99) {
        this.status = true;
        this.progressValue = 0;
        clearInterval(myInterval);
      }
    }, 50);
  };
}
