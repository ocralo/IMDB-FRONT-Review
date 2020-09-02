import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "../Reducer/index";
import thunk from "redux-thunk";

const middleware = thunk;

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(
	Reducer,
	composeEnhancers(applyMiddleware(middleware))
);

export default store;
