import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent implements OnInit {

  rating: number = 0;

  @Input() movie: Movie;
  @Input() idx: number;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() rate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeMovie() {
    this.remove.emit({idx: this.idx, data: this.movie});
  }

  setRating(evt) {
    this.rate.emit({rating: evt.rating, data: this.movie});
  }
}
