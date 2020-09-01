import React from "react";

//importacion de librerias externas
import { Card } from "react-bootstrap";

/**
 * Card de series
 */
export default function CardSerie() {
	return (
		<Card className="shadow mt-4">
			<Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg" />
			<Card.Body className="p-2">
				<Card.Title className="m-0">Card Title</Card.Title>
			</Card.Body>
		</Card>
	);
}
