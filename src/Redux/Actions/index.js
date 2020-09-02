// tipos de
export const FETCH_SERIES_PENDING = "FETCH_SERIES_PENDING";
export const FETCH_SERIES_SUCCESS = "FETCH_SERIES_SUCCESS";
export const FETCH_SERIES_ERROR = "FETCH_SERIES_ERROR";
export const FETCH_SERIES_PAGE_PENDING = "FETCH_SERIES_PAGE_PENDING";
export const FETCH_SERIES_PAGE_SUCCESS = "FETCH_SERIES_PAGE_SUCCESS";
export const FETCH_SERIES_PAGE_ERROR = "FETCH_SERIES_PAGE_ERROR";
export const FETCH_SERIES_SEARCH_PENDING =
	"FETCH_SERIES_SEARCH_PENDING";
export const FETCH_SERIES_SEARCH_SUCCESS =
	"FETCH_SERIES_SEARCH_SUCCESS";
export const FETCH_SERIES_SEARCH_ERROR = "FETCH_SERIES_SEARCH_ERROR";

/**
 * espera de la peticion, para traer series populares por pagina
 */
export function fetchSeriesPagePending() {
	return {
		type: FETCH_SERIES_PAGE_PENDING,
	};
}
/**
 * trae las series populares, si la peticion fue correcta
 * @param {Array} series
 */
export function fetchSeriesPageSuccess(series) {
	return {
		type: FETCH_SERIES_PAGE_SUCCESS,
		series,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchSeriesPageError(error) {
	return {
		type: FETCH_SERIES_PAGE_ERROR,
		error: error,
	};
}
/**
 * espera de la peticion, para traer series populares por pagina
 */
export function fetchSeriesPending() {
	return {
		type: FETCH_SERIES_PENDING,
	};
}
/**
 * trae las series populares, si la peticion fue correcta
 * @param {Array} series
 */
export function fetchSeriesSuccess(series) {
	return {
		type: FETCH_SERIES_SUCCESS,
		series,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchSeriesError(error) {
	return {
		type: FETCH_SERIES_ERROR,
		error: error,
	};
}

/**
 * espera de la peticion, para traer series buscadas
 */
export function fetchSearchSeriesPending() {
	return {
		type: FETCH_SERIES_SEARCH_PENDING,
	};
}
/**
 * trae las series populares, si la peticion fue correcta
 * @param {Array} seriesSearch
 */
export function fetchSearchSeriesSuccess(seriesSearch) {
	return {
		type: FETCH_SERIES_SEARCH_SUCCESS,
		seriesSearch,
	};
}

/**
 * trae el error de si la peticion no se pudo realizar
 * @param {*} error
 */
export function fetchSearchSeriesError(error) {
	return {
		type: FETCH_SERIES_SEARCH_ERROR,
		error: error,
	};
}
