// tipos de
export const FETCH_SERIES_PENDING = "FETCH_SERIES_PENDING";
export const FETCH_SERIES_SUCCESS = "FETCH_SERIES_SUCCESS";
export const FETCH_SERIES_ERROR = "FETCH_SERIES_ERROR";

/**
 *
 */
export function fetchSeriesPending() {
	return {
		type: FETCH_SERIES_PENDING,
	};
}
/**
 *
 * @param {Array} series
 */
export function fetchSeriesSuccess(series) {
	return {
		type: FETCH_SERIES_SUCCESS,
		series,
	};
}

/**
 *
 * @param {*} error
 */
export function fetchSeriesError(error) {
	return {
		type: FETCH_SERIES_ERROR,
		error: error,
	};
}
