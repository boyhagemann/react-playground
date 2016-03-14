import React from 'react';
import {render} from 'react-dom';
import Node from './components/node';
import config from './tree.json';

render(
    React.createElement(Node, config.value, config.children),
    document.getElementById('example')
)


