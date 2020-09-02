import React from "react";

//importacion de librerias externas
import { Card } from "react-bootstrap";

/**
 *
 * @param {*} param0
 */
export default function CardSerie({
	title = "titulo",
	imageURL = "/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg",
}) {
	return (
		<Card className="shadow mt-4">
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w500${imageURL}`}
			/>
			<Card.Body className="p-2">
				<Card.Title className="m-0">{title}</Card.Title>
			</Card.Body>
		</Card>
	);
}
