import React from "react";

//importacion de librerias externas
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
//importacion de componenetes

/**
 * componente Navbar, el cual sera el menu superior de la aplicacion
 */
export default function NavBar() {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Navbar.Brand href="#home">NVC Movie</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{/* <Nav.Link href="#home">Inicio</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link> */}
				</Nav>
				<Form inline>
					<FormControl
						type="text"
						placeholder="Buscar"
						className="mr-sm-2"
					/>
					<Button variant="outline-success">Buscar</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}
