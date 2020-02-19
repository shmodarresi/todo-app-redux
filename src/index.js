import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';
import todos from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todos , composeEnhancer(applyMiddleware()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

