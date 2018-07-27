import { Component, Input } from '@angular/core';

/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html'
})
export class MovieCardComponent {

  @Input() movie: any;

  constructor() {

  }

}
