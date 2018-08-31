import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import rootReducer from "./reducer";

//import { increment, decrement } from "./actions/index";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App store={store} />
		</Provider>,
		document.getElementById("root")
	);
};

// const handleClick = () => {
//   store.dispatch(increment());
// };

// const handleClickDe = () => {
//   store.dispatch(decrement());
// };

store.subscribe(render);

render();
registerServiceWorker();
