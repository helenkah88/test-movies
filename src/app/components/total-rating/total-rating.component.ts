import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-total-rating',
  template: `
    <p>{{ total.toFixed(2) }}</p>
  `,
  styles: []
})
export class TotalRatingComponent implements OnInit, OnChanges {

  @Input() movies: Movie[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.movies.length) {
      let ratings = this.movies.map(movie => movie.rating);
      this.total = ratings.reduce((acc, cur) => acc + cur)/ratings.length;
    }
  }

}
