import React, { useEffect, useState } from "react";

//importacion de librerias externas
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//importacion de actions de redux

//importacion de state de redux

//importacion de reducer de redux
import {
	getSeriesError,
	getSeriesPending,
	getSeries,
} from "../../../Redux/Reducer/index";

//importacion de componentes
import CardSerie from "../../Components/CardSerie/CardSerie";
import fetchSeriesAction from "../../../Requests/Requests";

/**
 * Vista principal de la aplicacion
 */
const Home = ({ fetchSeries, series }) => {
	useEffect(() => {
		fetchSeries("https://api.themoviedb.org/3/discover/tv");
	}, []);
	return (
		<Container className="mt-4">
			<Row>
				<Col>
					<h1>Series</h1>
				</Col>
			</Row>
			<Row>
				{series.map((value) => (
					<Col xs={12} md={4} sm={6} key={value.id}>
						<CardSerie
							title={value.name}
							imageURL={value.backdrop_path}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

/**
 * trae los estados de la storage
 * @param {*} state
 */
const mapStateToProps = (state) => ({
	error: getSeriesError(state),
	series: getSeries(state),
	pending: getSeriesPending(state),
});

/**
 * metodo para emitir acciones, para modificar el estado
 * de la storage
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchSeries: fetchSeriesAction,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
