import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  @Input() idx: number;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeMovie() {
    this.remove.emit({idx: this.idx, data: this.movie});
  }

}
