import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { nodify } from './components/node';
import config from './tree.json';

import { testApp } from './reducers'
const store = createStore(testApp)

render(
    React.createElement(Provider, { store }, nodify(config)),
    document.getElementById('example')
)


