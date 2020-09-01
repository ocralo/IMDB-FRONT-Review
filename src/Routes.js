import React from "react";

//importacion de librerias externas
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

//importacion de componenetes
import Home from "./Components/Views/Home/Home";
import NavBar from "./Components/Components/NavBar/NavBar";

/**
 * Componenete que maneja las rutas de la aplicacion
 */
export default function Routes() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
