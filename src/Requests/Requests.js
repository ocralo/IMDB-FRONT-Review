//importacion de librerias externas
import * as axios from "axios";

//importacion de acciones de redux
import {
	fetchSeriesPending,
	fetchSeriesSuccess,
	fetchSeriesError,
	fetchSeriesPagePending,
	fetchSeriesPageSuccess,
	fetchSeriesPageError,
	fetchSearchSeriesPending,
	fetchSearchSeriesSuccess,
	fetchSearchSeriesError,
} from "../Redux/Actions/index";

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna las series mas populares
 * @param {string} url
 * @param {int} page
 */
export const fetchSeries = (url, page = 1) => {
	return (dispatch) => {
		if (page !== 1) {
			dispatch(fetchSeriesPagePending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}`
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					console.log(dataResult);
					dispatch(fetchSeriesPageSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSeriesPageError(error));
				});
		} else {
			dispatch(fetchSeriesPending());
			axios
				.get(
					`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}`
				)
				.then((response) => {
					// handle success
					const dataResult = response.data.results;
					dispatch(fetchSeriesSuccess(dataResult));
					return dataResult;
				})
				.catch((error) => {
					// handle error
					console.log(error);
					dispatch(fetchSeriesError(error));
				});
		}
	};
};

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna la busqueda de una palabra, con relacion a
 * un nombre de serie
 * @param {string} url
 * @param {int} page
 * @param {string} query
 */
export const fetchSearchSeries = (url, page = 1, query = "a") => {
	return (dispatch) => {
		dispatch(fetchSearchSeriesPending());
		console.log(url);
		axios
			.get(
				`${url}?api_key=b2907782d07859a652052d3bae537475&page=${page}&query=${query}`
			)
			.then((response) => {
				// handle success
				const dataResult = response.data.results;
				console.log(dataResult);
				dispatch(fetchSearchSeriesSuccess(dataResult));
				return dataResult;
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchSearchSeriesError(error));
			});
	};
};
