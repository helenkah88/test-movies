import { ActionReducerMap, createSelector } from '@ngrx/store';

import { AppState } from '../models/app.state';
import { moviesReducer, getMovies } from './movies.reducers';

export const reducers: ActionReducerMap<AppState> = {
  movies: moviesReducer
}

export const selectMovies = createSelector(
	(state: AppState) => state.movies,
	getMovies
)