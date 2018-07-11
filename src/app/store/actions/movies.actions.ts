import { Action } from '@ngrx/store';

import { Movie } from '../../models/movie';

export const GET_MOVIES = '[Movies] Get Movies';
export const GET_MOVIES_SUCCESS = '[Movies] Get Movies Success';
export const GET_MOVIES_FAIL = '[Movies] Get Movies Fail';

export const SAVE_MOVIE = '[Movies] Save Movie';
export const SAVE_MOVIE_SUCCESS = '[Movies] Save Movie Success';
export const SAVE_MOVIE_FAIL = '[Movies] Save Movie Fail';

export const DELETE_MOVIE = '[Movies] Delete Movie';
export const DELETE_MOVIE_SUCCESS = '[Movies] Delete Movie Success';
export const DELETE_MOVIE_FAIL = '[Movies] Delete Movie Fail';

export const SET_RATING = '[Movies] Set Rating';
export const SET_RATING_SUCCESS = '[Movies] Set Rating Success';
export const SET_RATING_FAIL = '[Movies] Set Rating Fail';

export class GetMovies implements Action {
	readonly type = GET_MOVIES;
}

export class GetMoviesSuccess implements Action {
	readonly type = GET_MOVIES_SUCCESS;
	constructor(public payload: Movie[]) {}
}
export class GetMoviesFail implements Action {
	readonly type = GET_MOVIES_FAIL;
	constructor(payload: any) {}
}

export class SaveMovie implements Action {
	readonly type = SAVE_MOVIE;
	constructor(public payload: Movie) {}
}

export class SaveMovieSuccess implements Action {
	readonly type = SAVE_MOVIE_SUCCESS;
	constructor(public payload: any) {}
}
export class SaveMovieFail implements Action {
	readonly type = SAVE_MOVIE_FAIL;
	constructor(payload: any) {}
}

export class DeleteMovie implements Action {
	readonly type = DELETE_MOVIE;
	constructor(public payload: any) {}
}

export class DeleteMovieSuccess implements Action {
	readonly type = DELETE_MOVIE_SUCCESS;
	constructor(public payload: any) {}
}
export class DeleteMovieFail implements Action {
	readonly type = DELETE_MOVIE_FAIL;
	constructor(payload: any) {}
}

export class SetRating implements Action {
	readonly type = SET_RATING;
	constructor(public payload: any) {}
}

export class SetRatingSuccess implements Action {
	readonly type = SET_RATING_SUCCESS;
	constructor(public payload: any) {}
}

export class SetRatingFail implements Action {
	readonly type = SET_RATING_FAIL;
	constructor(payload: any) {}
}

export type MoviesAction = GetMovies
 | GetMoviesSuccess
 | GetMoviesFail
 | SaveMovie
 | SaveMovieSuccess
 | SaveMovieFail
 | DeleteMovie
 | DeleteMovieSuccess
 | DeleteMovieFail
 | SetRating
 | SetRatingSuccess
 | SetRatingFail