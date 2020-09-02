import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Routes from "./Routes";
import "./Sass/index.scss";

//importacion de librerias externas
import { Provider } from "react-redux";

//se importa la store de redux, que se utilizara
import Store from "./Redux/Store/index";

ReactDOM.render(
	<Provider store={Store}>
		<Routes />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
