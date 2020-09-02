import React, { useState, useRef } from "react";

//importacion de librerias externas
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Popover,
	Overlay,
} from "react-bootstrap";
//importacion de componenetes

/**
 * componente Navbar, el cual sera el menu superior de la aplicacion
 */
export default function NavBar() {
	const [showOverlay, setShowOverlay] = useState(false);
	const [targetOverlay, setTargetOverlay] = useState(null);
	const ref = useRef(null);

	/**
	 * funcion que activa o desactiva el overlay del buscador
	 * @param {*} event
	 */
	const handleClick = (event) => {
		setShowOverlay(!showOverlay);
		setTargetOverlay(event.target);
	};
	return (
		<Navbar bg="dark" expand="lg" variant="dark" sticky={"top"}>
			<Navbar.Brand href="#home">NVC Movie</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{/* <Nav.Link href="#home">Inicio</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link> */}
				</Nav>
				<div ref={ref} inline>
					<Button
						variant="outline-success"
						onClick={handleClick}
						className="btn-search">
						<img
							src={`${process.env.PUBLIC_URL}/img/search.svg`}
							alt=""
							srcset=""
							width="25"
						/>
					</Button>

					<Overlay
						show={showOverlay}
						target={targetOverlay}
						placement="bottom"
						container={ref.current}
						containerPadding={20}>
						<Popover id="popover-contained">
							<Popover.Title as="h3">
								¿Que serie Buscas?
							</Popover.Title>
							<Popover.Content>
								<Form>
									<FormControl
										type="text"
										placeholder="Buscar..."
										className="mr-sm-2"
									/>
								</Form>
							</Popover.Content>
						</Popover>
					</Overlay>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
}
