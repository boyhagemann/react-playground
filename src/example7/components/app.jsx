import React from 'react'
import { Router, hashHistory, browserHistory } from 'react-router'
import Box from './box'

const drivers = {
    hash: hashHistory,
    browser: browserHistory
}

const App = ({ history, children }) =>  {
    return <Router history={drivers[history]}>{children}</Router>
}

export default App;