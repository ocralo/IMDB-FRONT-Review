import {
	FETCH_SERIES_PENDING,
	FETCH_SERIES_SUCCESS,
	FETCH_SERIES_ERROR,
	FETCH_SERIES_PAGE_PENDING,
	FETCH_SERIES_PAGE_SUCCESS,
	FETCH_SERIES_PAGE_ERROR,
	FETCH_SERIES_SEARCH_PENDING,
	FETCH_SERIES_SEARCH_SUCCESS,
	FETCH_SERIES_SEARCH_ERROR,
} from "../Actions/index";

const initialState = {
	pending: false,
	series: [],
	seriesSearch: [],
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
		case FETCH_SERIES_PAGE_PENDING:
			console.log(state);
			return {
				...state,
				pending: true,
			};
		case FETCH_SERIES_PAGE_SUCCESS:
			const actionSerie = action.series;
			return {
				...state,
				pending: false,
				series: state.series.concat(actionSerie),
			};
		case FETCH_SERIES_PAGE_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				series: state.series,
			};
		case FETCH_SERIES_SEARCH_PENDING:
			console.log(state);
			return {
				...state,
				pending: true,
				seriesSearch: state.seriesSearch,
			};
		case FETCH_SERIES_SEARCH_SUCCESS:
			const actionSerieSearch = action.seriesSearch;
			return {
				...state,
				pending: false,
				seriesSearch: state.seriesSearch.concat(actionSerieSearch),
			};
		case FETCH_SERIES_SEARCH_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
				seriesSearch: state.seriesSearch,
			};
		default:
			return state;
	}
}

export const getSeries = (state) => state.series;
export const getSeriesSearch = (state) => state.seriesSearch;
export const getSeriesPending = (state) => state.pending;
export const getSeriesError = (state) => state.error;
