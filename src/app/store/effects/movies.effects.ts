import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as actions from '../actions/movies.actions';

let moviesList = [
	{
		title: 'movie 1',
		rating: 4
	},
	{
		title: 'movie 2',
		rating: 5
	},
	{
		title: 'movie 3',
		rating: 4
	}
]

@Injectable()
export class MoviesEffects {
	constructor(
		private actions$: Actions
	) {}

	@Effect()
	movies$ = this.actions$.ofType(actions.GET_MOVIES)
	.pipe(
		map(() => new actions.GetMoviesSuccess(moviesList))
	)

	@Effect()
	newMovie$ = this.actions$.ofType(actions.SAVE_MOVIE)
	.pipe(
		map((action: actions.SaveMovie) => action.payload),
		switchMap(payload => {
			console.log(payload);
			let newItem = payload;
			return of(newItem)
			.pipe(
				map(response => {
					return new actions.SaveMovieSuccess(response);
				})
			)
		})
	)

	@Effect()
	newRating$ = this.actions$.ofType(actions.SET_RATING)
	.pipe(
		map((action: actions.SetRating) => action.payload),
		switchMap(payload => {
			let newRating = payload.data;
			newRating.rating = payload.rating;
			return of(newRating)
			.pipe(
				map(response => {
					return new actions.SetRatingSuccess(response);
				})
			)
		})
	)

	@Effect()
	deletedMovie$ = this.actions$.ofType(actions.DELETE_MOVIE)
	.pipe(
		map((action: actions.DeleteMovie) => action.payload),
		switchMap(payload => {
			return of(payload.data)
			.pipe(
				map(response => {
					return new actions.DeleteMovieSuccess(response.title);
				})
			)
		})
	)
}