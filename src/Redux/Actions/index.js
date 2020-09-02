// tipos de
export const FETCH_SERIES_PENDING = "FETCH_SERIES_PENDING";
export const FETCH_SERIES_SUCCESS = "FETCH_SERIES_SUCCESS";
export const FETCH_SERIES_ERROR = "FETCH_SERIES_ERROR";
export const FETCH_SERIES_PAGE_PENDING = "FETCH_SERIES_PAGE_PENDING";
export const FETCH_SERIES_PAGE_SUCCESS = "FETCH_SERIES_PAGE_SUCCESS";
export const FETCH_SERIES_PAGE_ERROR = "FETCH_SERIES_PAGE_ERROR";

/**
 *
 */
export function fetchSeriesPagePending() {
	return {
		type: FETCH_SERIES_PAGE_PENDING,
	};
}
/**
 *
 * @param {Array} series
 */
export function fetchSeriesPageSuccess(series) {
	return {
		type: FETCH_SERIES_PAGE_SUCCESS,
		series,
	};
}

/**
 *
 * @param {*} error
 */
export function fetchSeriesPageError(error) {
	return {
		type: FETCH_SERIES_PAGE_ERROR,
		error: error,
	};
}
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
