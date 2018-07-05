import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [
    { title: 'jro', rating: 4 },
    { title: 'oge', rating: 3 },
    { title: 'ogeh', rating: 4 },
  ]

  constructor() { }

  ngOnInit() {
  }

  removeMovie(idx) {
    this.movies.splice(idx, 1);
  }

}
