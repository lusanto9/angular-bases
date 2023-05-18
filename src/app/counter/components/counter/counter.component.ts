// Versión realizada manualmente
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent {

// }

// Versión con Snippets
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ): void {

    // this.counter = this.counter + 1;
    this.counter += value; // Esta es la forma corta de hacer la línea de arriba
  }

  resetCounter( value: number ) {
    this.counter = value;
  }

}
