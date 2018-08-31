import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import reducer from './reducer/counter';
import {increment, decrement} from './actions/index'

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
    
    store.dispatch(increment());
};

const handleClickDe = ()=> {
    store.dispatch(decrement());
};

store.subscribe(render);

render();
registerServiceWorker();
