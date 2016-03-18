import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer } from 'react-router-redux'

import { nodify } from './components/node'
import config from './tree.json'

const reducers = combineReducers({
    routing: routerReducer
})

const store = createStore(
    reducers,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

render(
    React.createElement(Provider, { store }, nodify(config)),
    document.getElementById('example')
)


