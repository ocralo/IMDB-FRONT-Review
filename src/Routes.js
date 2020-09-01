import React from "react";

//importacion de librerias externas
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

//importacion de componenetes
import Home from "./Components/Views/Home/Home";

/**
 * Componenete que maneja las rutas de la aplicacion
 */
export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
