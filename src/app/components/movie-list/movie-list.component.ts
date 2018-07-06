import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/models/app.state';
import * as actions from '../../store/actions/movies.actions';
import { selectMovies } from '../../store/reducers/core.reducers';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;
  movie: Movie = new Movie();

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.movies$ = this.store.pipe(
      select(selectMovies)
    )

    this.store.dispatch({type: actions.GET_MOVIES});
  }

  addMovie() {
    this.movie.rating = 3;
    this.store.dispatch({type: actions.SAVE_MOVIE, payload: this.movie});
    this.movie = new Movie();
  }

  removeMovie(evt) {
    this.store.dispatch({type: actions.DELETE_MOVIE, payload: { idx: evt.idx, data: evt.data } });
  }

}
