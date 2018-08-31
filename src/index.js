import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import reducer from './reducer/counter';

const store = createStore(reducer);
const render = ()=> {
    ReactDOM.render(
        <App 
            onClick={handleClick} 
            onClickDe = {handleClickDe}
            value={store.getState()}/>, document.getElementById('root')
    );
}

const handleClick = ()=> {
    store.dispatch({
        type: "INCREMENT"
    });
};

const handleClickDe = ()=> {
    store.dispatch({
        type: "DECREMENT"
    });
};

store.subscribe(render);

render();
registerServiceWorker();
