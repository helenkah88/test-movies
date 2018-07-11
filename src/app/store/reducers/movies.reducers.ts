import { Action } from '@ngrx/store';

import * as actions from '../actions/movies.actions';
import { MoviesState } from '../models/movies';
import { Movie } from '../../models/movie';

export const initialState: MoviesState = {
	movies: [],
	rating: 0
}

export function moviesReducer(state = initialState, action: actions.MoviesAction) {
	switch (action.type) {
		case actions.GET_MOVIES_SUCCESS:
			return {
				...state,
				movies: action.payload
			}
		case actions.GET_MOVIES_FAIL:
			return {
				...state
			}
		case actions.SAVE_MOVIE_SUCCESS:
			let movies = [...state.movies, action.payload];
			return {
				...state,
				movies
			}
		case actions.SET_RATING_SUCCESS: {
			let idx = state.movies.indexOf(action.payload);
			state.movies.splice(idx, 1, action.payload);
			return {
				...state,
				movies: state.movies
			}
		}			
		case actions.DELETE_MOVIE_SUCCESS:
			return {
				...state,
				movies: state.movies.filter(movie => movie.title !== action.payload)
			}

		default:
			return state;
	}
}

export const getMovies = (state: MoviesState) => {
	return state.movies;
}

export const getRating = (state: MoviesState) => {
	return state.rating;
}