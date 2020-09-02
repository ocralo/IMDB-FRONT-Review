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
} from "../Redux/Actions/index";

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada
 * que retorna las series mas populares
 * @param {string} url
 * @param {int} page
 */
function fetchSeries(url, page = 1) {
	return (dispatch) => {
		if (page != 1) {
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
}

export default fetchSeries;
