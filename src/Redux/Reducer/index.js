import {
	FETCH_SERIES_PENDING,
	FETCH_SERIES_SUCCESS,
	FETCH_SERIES_ERROR,
} from "../Actions/index";

const initialState = {
	pending: false,
	series: [],
	error: null,
};

/**
 * Manejador de acciones
 * @param {JSON} state
 * @param {*} action
 */
export default function productsReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case FETCH_SERIES_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_SERIES_SUCCESS:
			return {
				...state,
				pending: false,
				series: action.series,
			};
		case FETCH_SERIES_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
}

export const getSeries = (state) => state.series;
export const getSeriesPending = (state) => state.pending;
export const getSeriesError = (state) => state.error;
