import React from 'react';
import {render} from 'react-dom';
import Node from './components/node';
import fetch from 'isomorphic-fetch';

fetch('http://localhost:3000/node/1')
    .then(function(response) {

        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }

        return response.json();
    })
    .then(function(config) {
        return render(
            React.createElement(Node, config.value, config.children),
            document.getElementById('example')
        );
    });


