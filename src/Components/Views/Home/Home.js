import React from "react";

//importacion de librerias externas
import { Container, Row, Col } from "react-bootstrap";

//importacion de componentes
import CardSerie from "../../Components/CardSerie/CardSerie";

/**
 * Vista principal de la aplicacion
 */
export default function Home() {
	return (
		<Container className="mt-4">
			<Row>
				<Col>
					<h1>Series</h1>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4} sm={6}>
					<CardSerie />
				</Col>
				<Col xs={12} md={4} sm={6}>
					<CardSerie />
				</Col>
				<Col xs={12} md={4} sm={6}>
					<CardSerie />
				</Col>
				<Col xs={12} md={4} sm={6}>
					<CardSerie />
				</Col>
				<Col xs={12} md={4} sm={6}>
					<CardSerie />
				</Col>
				<Col xs={12} md={4} sm={6}>
					<CardSerie />
				</Col>
			</Row>
		</Container>
	);
}
