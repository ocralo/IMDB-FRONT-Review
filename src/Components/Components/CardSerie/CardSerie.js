import React from "react";

//importacion de librerias externas
import { Card } from "react-bootstrap";

/**
 *
 * @param {*} param0
 */
export default function CardSerie({ title = "titulo", imageURL }) {
	return (
		<Card className="shadow mt-4">
			<Card.Img
				variant="top"
				src={
					imageURL
						? `https://image.tmdb.org/t/p/w500${imageURL}`
						: `${process.env.PUBLIC_URL}/img/error.svg`
				}
				height="167.453"
			/>
			<Card.Body className="p-2">
				<Card.Title className="m-0">{title}</Card.Title>
			</Card.Body>
		</Card>
	);
}
