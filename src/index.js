import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";

import user from "./reducer/user";

//import { increment, decrement } from "./actions/index";
import { Provider } from "react-redux";

import { logger } from "redux-logger";

const store = createStore(user, applyMiddleware(logger, thunk));
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
