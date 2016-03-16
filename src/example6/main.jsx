import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { nodify } from './components/node';
import config from './tree.json';
import { logger } from './middleware';

import { items } from './reducers'

// Load 3 items in Firebase
//import { ref } from './query'

const store = createStore(
    items,
    compose(
        applyMiddleware(thunkMiddleware, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

render(
    React.createElement(Provider, { store }, nodify(config)),
    document.getElementById('example')
)


