/* LIBRARIES */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

/* COMPONENTS & REDUX REDUCERS */
import App from './components/App';
import reducers from './reducers';

/* HOOKING UP MIDDLEWARE TO A STORE */
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>,
    document.querySelector("#root")
);