import { Component } from '@angular/core';

/**
 * Generated class for the MostrarproductoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mostrarproducto',
  templateUrl: 'mostrarproducto.html'
})
export class MostrarproductoComponent {

  text: string;

  constructor() {
    console.log('Hello MostrarproductoComponent Component');
    this.text = 'Hello World';
  }

}
