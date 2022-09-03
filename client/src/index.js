import React from 'react';
import ReactDOM from 'react-dom';

/*Provider is going to keep track of that store which is
that global state and that allow to access that store 
from anywhere inside app */
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
    );