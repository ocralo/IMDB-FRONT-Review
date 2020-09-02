//importacion de librerias externas
import * as axios from "axios";

//importacion de acciones de redux
import {
	fetchSeriesPending,
	fetchSeriesSuccess,
	fetchSeriesError,
} from "../Redux/Actions/index";

/**
 * Funcion que realiza peticion get a la api de TMDB con la key generada 
 * que retorna las series mas populares
 * @param {string} url
 */
function fetchSeries(url) {
	return (dispatch) => {
		dispatch(fetchSeriesPending());
		axios
			.get(`${url}?api_key=b2907782d07859a652052d3bae537475`)
			.then((response) => {
				// handle success
				const dataResult = response.data.results;
				console.log(dataResult);
				dispatch(
					fetchSeriesSuccess(Object.values(dataResult))
				);
			})
			.catch((error) => {
				// handle error
				console.log(error);
				dispatch(fetchSeriesError(error));
			});
	};
}

export default fetchSeries;
