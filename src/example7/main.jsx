import React from 'react'
import {render} from 'react-dom'
import nodify from './components/node'
import config from './tree.json'

render(
    nodify(config),
    document.getElementById('example')
)


